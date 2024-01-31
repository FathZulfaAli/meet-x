-- AlterTable
ALTER TABLE `samples` MODIFY `updatedAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `customer` (
    `customer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `auth_id` INTEGER NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NULL,
    `used_ref_code` VARCHAR(6) NULL,
    `ref_code` VARCHAR(6) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `amouth_points` INTEGER NULL,
    `isDiscount` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `customer_id`(`customer_id`),
    UNIQUE INDEX `auth_id`(`auth_id`),
    UNIQUE INDEX `ref_code`(`ref_code`),
    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `auth` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('customer', 'Seller') NOT NULL DEFAULT 'customer',

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`, `email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tittle` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `date_event` VARCHAR(191) NOT NULL,
    `price_type` ENUM('FREE', 'PAID') NOT NULL,
    `price` INTEGER NOT NULL,
    `place` VARCHAR(191) NOT NULL,
    `seats` INTEGER NOT NULL,
    `terms` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NULL,
    `category` ENUM('Sport', 'Concert', 'Seminar', 'Competition') NOT NULL,
    `available` BOOLEAN NOT NULL DEFAULT true,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `eventorganizer` (
    `eo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `auth_id` INTEGER NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NULL,
    `company_name` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `eo_id`(`eo_id`),
    UNIQUE INDEX `auth_id`(`auth_id`),
    INDEX `fk_auth_eventOrganizer`(`auth_id`),
    PRIMARY KEY (`eo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `referralCode` (
    `ref_log_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rc_provider` INTEGER NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expired_at` TIMESTAMP(0) NULL,
    `amount_Point` INTEGER NOT NULL,

    UNIQUE INDEX `ref_log_id`(`ref_log_id`),
    INDEX `rc_provider`(`rc_provider`),
    PRIMARY KEY (`ref_log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `EventId` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `amountPaid` INTEGER NULL,
    `discountApplied` INTEGER NULL,
    `pointUsed` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Transaction_EventId_fkey`(`EventId`),
    INDEX `Transaction_customer_id_fkey`(`customer_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cronLog` (
    `log_id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `log_id`(`log_id`),
    PRIMARY KEY (`log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `customer` ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`auth_id`) REFERENCES `auth`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `eventorganizer` ADD CONSTRAINT `auth_rel_id` FOREIGN KEY (`auth_id`) REFERENCES `auth`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `referralCode` ADD CONSTRAINT `referralCode_rc_provider_fkey` FOREIGN KEY (`rc_provider`) REFERENCES `customer`(`customer_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `Transaction_EventId_fkey` FOREIGN KEY (`EventId`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `Transaction_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
