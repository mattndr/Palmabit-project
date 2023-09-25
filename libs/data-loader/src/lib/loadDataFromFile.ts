import fs from 'fs/promises';

const loadDataFromFile = async (src: string) => {
  try {
    const data = await fs.readFile(src, { encoding: 'utf8' });
    return data
      .split(/\r?\n/)
      .slice(1)
      .map((el) => {
        const subArr = el.split(',');
        return {
          lastName: subArr[0],
          firstName: subArr[1].trim(),
          birthDate: subArr[2].trim(),
          email: subArr[3].trim(),
        };
      });
  } catch (err) {
    console.log(err);
    return;
  }
};

export { loadDataFromFile };
