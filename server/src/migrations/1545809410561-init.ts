import {MigrationInterface, QueryRunner} from "typeorm";

export class init1545809410561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "agency" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "name" character varying NOT NULL, CONSTRAINT "PK_ab1244724d1c216e9720635a2e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "program" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "name" character varying NOT NULL, CONSTRAINT "PK_3bade5945afbafefdd26a3a29fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agency_program" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "agencyId" uuid NOT NULL, "programId" uuid NOT NULL, "name" character varying NOT NULL, "address" character varying, "state" character varying, "busAccessible" boolean, "metroAccessible" boolean, "description" text, CONSTRAINT "PK_4eaac98e1cbc9d0d9485cf35c9a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "program_segment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "name" character varying NOT NULL, CONSTRAINT "PK_4b54bf7d63510d9b082b81a63c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agency_program_program_segment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "startDate" TIMESTAMP, "endDate" TIMESTAMP, "agencyProgramId" uuid NOT NULL, "programSegmentId" uuid NOT NULL, CONSTRAINT "PK_d0174895d56baf57b2b1bf4a1e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "label" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "userId" uuid, "roleId" uuid, CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "user_gender_enum" AS ENUM('MALE', 'FEMALE')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "username" character varying NOT NULL, "password" character varying, "gender" "user_gender_enum", "firstName" character varying, "lastName" character varying, "dateOfBirth" TIMESTAMP, "email" character varying, "phone" character varying, "profilePhotoUrl" character varying, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "employee_employeetype_enum" AS ENUM('PROVIDER', 'CASE_WORKER', 'UNIT_SUPERVISOR', 'DIRECTOR')`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "employeeType" "employee_employeetype_enum" NOT NULL, "userId" uuid, CONSTRAINT "REL_f4b0d329c4a3cf79ffe9d56504" UNIQUE ("userId"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "case" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "employeeId" uuid NOT NULL, CONSTRAINT "PK_a1b20a2aef6fc438389d2c4aca0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "middleName" character varying, "address" character varying, "city" character varying, "zipCode" character varying, "state" character varying, "dateOfBirth" TIMESTAMP, "caseId" uuid NOT NULL, CONSTRAINT "REL_7702f6661d00e26157100e7bc4" UNIQUE ("caseId"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "client_agency_program_status_enum" AS ENUM('INCOMPLETED', 'IN_PROGRESS')`);
        await queryRunner.query(`CREATE TABLE "client_agency_program" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "clientId" uuid NOT NULL, "agencyProgramId" uuid NOT NULL, "enrollmentDate" TIMESTAMP NOT NULL, "completionDate" TIMESTAMP, "status" "client_agency_program_status_enum" NOT NULL, CONSTRAINT "PK_66118f0f930af1ee8016bf1b6a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "clientAgencyProgramId" uuid NOT NULL, "employeeId" uuid NOT NULL, "content" text NOT NULL, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "county" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "name" character varying NOT NULL, CONSTRAINT "PK_e64ba58a034afb0e3d15b329351" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee_county" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "employeeId" uuid NOT NULL, "countyId" uuid NOT NULL, CONSTRAINT "PK_b86ebdd726dd89b5e694444104a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "survey" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "name" character varying NOT NULL, "description" text, "programSegmentId" uuid NOT NULL, "agencyProgramId" uuid NOT NULL, CONSTRAINT "PK_f0da32b9181e9c02ecf0be11ed3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "survey_question_sortorder_enum" AS ENUM('ASC', 'DESC')`);
        await queryRunner.query(`CREATE TABLE "survey_question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "surveyId" uuid NOT NULL, "sortOrder" "survey_question_sortorder_enum" NOT NULL, "title" character varying NOT NULL, "theme" character varying, "type" character varying NOT NULL, CONSTRAINT "PK_ec6d65e83fd7217202178b79907" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "survey_response" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "surveyQuestionId" uuid NOT NULL, "clientId" uuid NOT NULL, "response" text NOT NULL, CONSTRAINT "PK_d9326eb52bf8b23d56a39ce419a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "trauma" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "insertId" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "name" character varying NOT NULL, "clientId" uuid NOT NULL, CONSTRAINT "PK_52f895ddc352dda27fb4d94fdce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "agency_program" ADD CONSTRAINT "FK_e5507c00d480d9ddbfd2319f68b" FOREIGN KEY ("agencyId") REFERENCES "agency"("id")`);
        await queryRunner.query(`ALTER TABLE "agency_program" ADD CONSTRAINT "FK_b96e9cb49ae16ab34ef46d4e1d4" FOREIGN KEY ("programId") REFERENCES "program"("id")`);
        await queryRunner.query(`ALTER TABLE "agency_program_program_segment" ADD CONSTRAINT "FK_f52ffa270069449857941930818" FOREIGN KEY ("agencyProgramId") REFERENCES "agency_program"("id")`);
        await queryRunner.query(`ALTER TABLE "agency_program_program_segment" ADD CONSTRAINT "FK_b133efb7760204a5523ae738a63" FOREIGN KEY ("programSegmentId") REFERENCES "program_segment"("id")`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_ab40a6f0cd7d3ebfcce082131fd" FOREIGN KEY ("userId") REFERENCES "user"("id")`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_dba55ed826ef26b5b22bd39409b" FOREIGN KEY ("roleId") REFERENCES "role"("id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_d815248e21efbeb9a2bfd8ef73e" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_7702f6661d00e26157100e7bc4c" FOREIGN KEY ("caseId") REFERENCES "case"("id")`);
        await queryRunner.query(`ALTER TABLE "client_agency_program" ADD CONSTRAINT "FK_4f37c7081088fd2d878dee2d752" FOREIGN KEY ("clientId") REFERENCES "client"("id")`);
        await queryRunner.query(`ALTER TABLE "client_agency_program" ADD CONSTRAINT "FK_1ff16c2e534b428194838f68724" FOREIGN KEY ("agencyProgramId") REFERENCES "agency_program"("id")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_13e81e9e64fea245fa818346d4d" FOREIGN KEY ("clientAgencyProgramId") REFERENCES "client_agency_program"("id")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_7a88834dadfa6fe261268bfceef" FOREIGN KEY ("employeeId") REFERENCES "employee"("id")`);
        await queryRunner.query(`ALTER TABLE "employee_county" ADD CONSTRAINT "FK_89d63b0652667c62f443d027232" FOREIGN KEY ("employeeId") REFERENCES "employee"("id")`);
        await queryRunner.query(`ALTER TABLE "employee_county" ADD CONSTRAINT "FK_a9981cea9f994dc807625f1e051" FOREIGN KEY ("countyId") REFERENCES "county"("id")`);
        await queryRunner.query(`ALTER TABLE "survey" ADD CONSTRAINT "FK_29825a95cf2235f7aa742f89939" FOREIGN KEY ("agencyProgramId") REFERENCES "agency_program"("id")`);
        await queryRunner.query(`ALTER TABLE "survey" ADD CONSTRAINT "FK_0042515a42b3589174e0b356b6a" FOREIGN KEY ("programSegmentId") REFERENCES "program_segment"("id")`);
        await queryRunner.query(`ALTER TABLE "survey_question" ADD CONSTRAINT "FK_036a359b4a0884d113f6232e96d" FOREIGN KEY ("surveyId") REFERENCES "survey"("id")`);
        await queryRunner.query(`ALTER TABLE "survey_response" ADD CONSTRAINT "FK_7b5d7b0ae7aece2bf0f87db4aac" FOREIGN KEY ("surveyQuestionId") REFERENCES "survey_question"("id")`);
        await queryRunner.query(`ALTER TABLE "survey_response" ADD CONSTRAINT "FK_d4d43b1708d17b4c66149d0bf43" FOREIGN KEY ("clientId") REFERENCES "client"("id")`);
        await queryRunner.query(`ALTER TABLE "trauma" ADD CONSTRAINT "FK_825b6ea1a4437594fd296b002b4" FOREIGN KEY ("clientId") REFERENCES "client"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "trauma" DROP CONSTRAINT "FK_825b6ea1a4437594fd296b002b4"`);
        await queryRunner.query(`ALTER TABLE "survey_response" DROP CONSTRAINT "FK_d4d43b1708d17b4c66149d0bf43"`);
        await queryRunner.query(`ALTER TABLE "survey_response" DROP CONSTRAINT "FK_7b5d7b0ae7aece2bf0f87db4aac"`);
        await queryRunner.query(`ALTER TABLE "survey_question" DROP CONSTRAINT "FK_036a359b4a0884d113f6232e96d"`);
        await queryRunner.query(`ALTER TABLE "survey" DROP CONSTRAINT "FK_0042515a42b3589174e0b356b6a"`);
        await queryRunner.query(`ALTER TABLE "survey" DROP CONSTRAINT "FK_29825a95cf2235f7aa742f89939"`);
        await queryRunner.query(`ALTER TABLE "employee_county" DROP CONSTRAINT "FK_a9981cea9f994dc807625f1e051"`);
        await queryRunner.query(`ALTER TABLE "employee_county" DROP CONSTRAINT "FK_89d63b0652667c62f443d027232"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_7a88834dadfa6fe261268bfceef"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_13e81e9e64fea245fa818346d4d"`);
        await queryRunner.query(`ALTER TABLE "client_agency_program" DROP CONSTRAINT "FK_1ff16c2e534b428194838f68724"`);
        await queryRunner.query(`ALTER TABLE "client_agency_program" DROP CONSTRAINT "FK_4f37c7081088fd2d878dee2d752"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_7702f6661d00e26157100e7bc4c"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_d815248e21efbeb9a2bfd8ef73e"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_dba55ed826ef26b5b22bd39409b"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_ab40a6f0cd7d3ebfcce082131fd"`);
        await queryRunner.query(`ALTER TABLE "agency_program_program_segment" DROP CONSTRAINT "FK_b133efb7760204a5523ae738a63"`);
        await queryRunner.query(`ALTER TABLE "agency_program_program_segment" DROP CONSTRAINT "FK_f52ffa270069449857941930818"`);
        await queryRunner.query(`ALTER TABLE "agency_program" DROP CONSTRAINT "FK_b96e9cb49ae16ab34ef46d4e1d4"`);
        await queryRunner.query(`ALTER TABLE "agency_program" DROP CONSTRAINT "FK_e5507c00d480d9ddbfd2319f68b"`);
        await queryRunner.query(`DROP TABLE "trauma"`);
        await queryRunner.query(`DROP TABLE "survey_response"`);
        await queryRunner.query(`DROP TABLE "survey_question"`);
        await queryRunner.query(`DROP TYPE "survey_question_sortorder_enum"`);
        await queryRunner.query(`DROP TABLE "survey"`);
        await queryRunner.query(`DROP TABLE "employee_county"`);
        await queryRunner.query(`DROP TABLE "county"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "client_agency_program"`);
        await queryRunner.query(`DROP TYPE "client_agency_program_status_enum"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "case"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TYPE "employee_employeetype_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_gender_enum"`);
        await queryRunner.query(`DROP TABLE "user_role"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "agency_program_program_segment"`);
        await queryRunner.query(`DROP TABLE "program_segment"`);
        await queryRunner.query(`DROP TABLE "agency_program"`);
        await queryRunner.query(`DROP TABLE "program"`);
        await queryRunner.query(`DROP TABLE "agency"`);
    }

}
