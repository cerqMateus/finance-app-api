/*
  Warnings:

  - You are about to drop the column `las_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('EARNING', 'EXPENSE', 'INVESTMENT');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "las_name",
ADD COLUMN     "last_name" VARCHAR(50) NOT NULL;

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "date" DATE NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "type" "TransactionType" NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
