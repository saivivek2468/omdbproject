export const checkObjectIsEmpty = (objectName) => {
  return (
    Object.keys(objectName).length === 0 && objectName.constructor === Object
  );
};
