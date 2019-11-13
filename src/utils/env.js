/**
 * Helper function to get the env variable value 
 * if variable not found then it will throw an Error
 * 
 * @param {*} envVariable 
 */
export default function getEnvVariable(envVariable) {
    const envValue = process.env[envVariable];
    
    if(!envValue) {
        throw new Error(`${envVariable} not found`);
    }

    return envValue;
}