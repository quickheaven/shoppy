-- CreateTable
CREATE TABLE "shoppy"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shoppy"."Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "shoppy"."User"("email");

-- AddForeignKey
ALTER TABLE "shoppy"."Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "shoppy"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
