import dotEnv from 'dotenv';

dotEnv.config();

const { PORT = '5000' } = process.env;

const env = {
  port: Number(PORT)
};

console.log('env', env);

export default env;
