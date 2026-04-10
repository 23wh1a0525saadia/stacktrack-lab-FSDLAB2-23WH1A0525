// TODO: Set the base URL for your API

export const getTasks = async () => {
    const response = await fetch('/api/tasks');
    return response.json();
};