export default async url => {
  const res = {
    output: [],
  };

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    res.output.push(data);
  } catch (e) {
    console.warn(e);
  }

  return res;
};
