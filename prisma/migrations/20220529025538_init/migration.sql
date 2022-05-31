-- CreateTable
CREATE TABLE "Computer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "computername" TEXT NOT NULL,
    "anydeskid" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Computer_username_key" ON "Computer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Computer_computername_key" ON "Computer"("computername");

-- CreateIndex
CREATE UNIQUE INDEX "Computer_anydeskid_key" ON "Computer"("anydeskid");
