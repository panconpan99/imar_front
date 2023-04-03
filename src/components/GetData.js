export default function GetData () {
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push(Math.floor(Math.random() * 50) + 5);
    }
    return data;
};
