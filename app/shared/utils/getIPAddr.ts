export const getIPAddr = async () => {
  const res = await fetch('https://api.ipify.org?format=json');
  const IP = await res.json();
  return IP;
};
