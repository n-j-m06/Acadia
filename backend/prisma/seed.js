import { PrismaClient } from "@prisma/client";
import fs from "fs";
import csv from "csv-parser";

const prisma = new PrismaClient();

const colleges = [];

fs.createReadStream("./prisma/data/engineering colleges in India.csv")
  .pipe(csv())
  .on("data", (row) => {
    try {
      const establishedYear = parseInt(
        row["Established Year"] || ""
      );

      colleges.push({
        name:
          row["College Name"] ||
          row["college_name"] ||
          row["Name"] ||
          "Unknown College",

        stream: "Engineering",

        city:
          row["City"] ||
          row["city"] ||
          "Unknown",

        state:
          row["State"] ||
          row["state"] ||
          "Unknown",

        establishedYear:
          !isNaN(establishedYear) &&
          establishedYear > 1800 &&
          establishedYear < 2100
            ? establishedYear
            : null,

        // Temporarily disable fees
        fees: null,

        category: null,
        nirfRank: null,
        avgPackage: null,
        highestPackage: null,
        naacGrade: null,
        ownership: null,
        website: null,
        description: null,
      });
    } catch (err) {
      console.log("Skipped Row");
    }
  })
  .on("end", async () => {
    try {
      console.log(
        `Preparing to insert ${colleges.length} colleges`
      );

      await prisma.college.createMany({
        data: colleges,
      });

      console.log(
        `✅ Successfully inserted ${colleges.length} colleges`
      );
    } catch (error) {
      console.error(error);
    } finally {
      await prisma.$disconnect();
    }
  });