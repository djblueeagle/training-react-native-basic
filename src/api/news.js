export default async function fetchNews() {
  try {
    const response = await fetch('https://gapi.xyz/api/V1/?q=indonesia&max=6');
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
