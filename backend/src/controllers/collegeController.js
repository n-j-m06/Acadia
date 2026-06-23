import prisma from "../lib/prisma.js";

export const getAllColleges = async (req, res) => {
  try {
    const colleges = await prisma.college.findMany({
      take: 100,
    });

    res.json(colleges);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch colleges",
    });
  }
};

export const searchColleges = async (req, res) => {
  try {
    const { q } = req.query;

    const colleges =
      await prisma.college.findMany({
        where: {
          name: {
            contains: q,
            mode: "insensitive",
          },
        },
        take: 5,
      });

    res.json(colleges);
  } catch (error) {
    res.status(500).json({
      message: "Search failed",
    });
  }
};
export const getCollegeById = async (req, res) => {
  try {
    const { id } = req.params;

    const college =
      await prisma.college.findUnique({
        where: {
          id: Number(id),
        },
      });

    if (!college) {
      return res.status(404).json({
        message: "College not found",
      });
    }

    res.json(college);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch college",
    });
  }
};