import prisma from '../lib/prisma';

export async function ensureConnected(req, res, next) {
    try {
        await prisma.$connect(); 
        next(); 
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ error: "Failed to connect to the database" });
    }
}


