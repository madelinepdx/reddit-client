export const fetchPosts = async (subreddit) => {
    const response = await fetch (`https://www.reddit.com/r/${subreddit}/hot.json`);
    const json = await response.json();
    console.log(json.data.children.map((post) => post.data)); 
    return json.data.children.map((post) => post.data);
}