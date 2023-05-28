import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
 
// create the connection
const connection = connect({
  // host: "aws.connect.psdb.cloud",
  // username: "cjnmtgt3zftqlngooyso",
  // password: "pscale_pw_a3JhiWnr62j2HCucOKR10tlTo6eFVrOQF1rTtxNwMTT",
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});
 
export const db = drizzle(connection);