import "server-only";
export const serverSideFunction = () => {
  console.log(
    `use multiple libraries,
    use environment variables
    intract with database
    process confidential information
    `
  );
  return "server result";
};
//we use server only pkg to prevent server component render on the browsers console
