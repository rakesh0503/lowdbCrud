export const calculateNextId = <T>(objects: T[], getId: (obj: T) => number) => {
    let lastId = 0;

    if (objects.length > 0) {
        const lastObject = objects[objects.length - 1];
        lastId = getId(lastObject);
    }

    return lastId + 1;
};
