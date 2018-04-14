const sortByDate = (a,b) => {
  return new Date(b.lastEditedAt).getTime() - new Date(a.lastEditedAt).getTime();
}

export default function getSortedNews(newsArray) {
  newsArray.sort(sortByDate);
}
