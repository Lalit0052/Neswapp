import React, { useState,useEffect } from 'react'
import Newsitem from './newsitem'
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {
  let [articles, setarticles] = useState([])
  let [page, setpage] = useState(1)
  let [totalResults, settotalResults] = useState(0)
 
  async function getdata() {
    try {
      setpage(1)
      var rawdata = ""
      if (props.search === "") {
        rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=0edee5567ae64553ab50a3a2870e7612`)

      }
      else {
        rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=0edee5567ae64553ab50a3a2870e7612`)
      }
      let result = await rawdata.json()

      setarticles(result.articles)
      settotalResults(result.totalResults)
    }
    catch (error) {
      console.log("invalid data");
    }
  }
  const fetchMoreData = async () => {
    try {
      setpage(page + 1)

      let rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=0edee5567ae64553ab50a3a2870e7612`)
      let result = await rawdata.json()
      setarticles(articles.concat(result.articles))
    }
    catch (error) {
      console.log("invalid data");
    }
  }


  useEffect(() => {
    getdata()
  }, [props.q, props.language, props.pageSize, props.search]);

  return (
    <>
      <h3 className='background text-light text-center p-2 mt-1'>{props.q} News Section</h3>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<h4>Loading...</h4>}
      >

        <div className="row">
          {articles.map((item, index) => {
            return <Newsitem
              key={index}
              title={item.title}
              pic={item.urlToImage}
              description={item.description}
              source={item.source.name}
              date={item.publishedAt}
              url={item.url}
            />
          })}
        </div>
      </InfiniteScroll>
    </>
  )
}

