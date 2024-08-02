require('dotenv').config();



const allUsers = async () => {

    try {
    const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
    const username = process.env.NEXT_PUBLIC_DB_USER;
    const password = process.env.NEXT_PUBLIC_DB_PASS;
    const credentials = btoa(`${username}:${password}`);
    

    console.log(`${username}:${password}`);
    
  
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${credentials}`
        }
    });
    const data = await response.json();
    return data
    } catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

const getUserAtIndex = async (index = 3) => {
    try {
        const users = await allUsers();
        if (users && users.length > index) {
            return users[index];
        } else {
            throw new Error(`User at index ${index} not found.`);
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export { allUsers, getUserAtIndex };
