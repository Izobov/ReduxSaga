export const getLatestNews = async (search) => {
    const req = await fetch(`http://hn.algolia.com/api/v1/search?query=${search}&hitsPerPage=10&page=0`)
    return await req.json();
}