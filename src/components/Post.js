import { useEffect, useState } from "react";
import '../css/App.css';

export default function Post(props) {

  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(props.likes);
  const [firstRender, setFirstRender] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState('');
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [ratio, setRatio] = useState();
  let pi = new Image().onload = () => {
    setHeight(pi.height);
    setWidth(pi.width);
    setRatio((pi.width / pi.height));
  }
  pi.src = props.img;

  const handleTextVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLikeClick = () => {
    setLike(!like);
  }

  const createFullLengthPost = () => {
    let t = [];
    (props.content.map((paragraph, index) => {
      t.push(<p key={index}>{paragraph}</p>);
    }));
    setContent(t);
  }

  const createPartialLengthPost = () => {
    let countchars = 0;
    let t = [];
    props.content.map((paragraph, index) => {
      if (countchars <= 279) {
        if (countchars + paragraph.length <= 280) {
          t.push(<p key={index}>{paragraph}</p>);
          countchars += paragraph.length;
        } else {
          let breakpoint = paragraph.indexOf(' ', (280 - countchars));
          let partialText = paragraph.substring(0, breakpoint);
          if (partialText.length > 0) {
            countchars += partialText.length;
            partialText = partialText + '...';
          }
          t.push(<p key={index}>{partialText}</p>)
        }
      }
      setContent(t);
    })
  }

  useEffect(() => {

    handleResize();
    createPartialLengthPost();

    let postTotalCharacters = 0;
    props.content.map(p => {
      postTotalCharacters += p.length;
    })
    if (postTotalCharacters <= 280) {
      document.getElementById('expander').style.visibility = 'hidden';
    }

    setFirstRender(false);
  }, [])


  useEffect(() => {
    if (!firstRender) {
      if (isExpanded) {
        createFullLengthPost();
      } else {
        createPartialLengthPost();
      }
    }
  }, [isExpanded])

  useEffect(() => {
    console.log(like);
    if (!firstRender) {
      if (like) {
        setLikes(likes + 1);
      } else {
        setLikes(likes - 1);
      }
    }

  }, [like]);

  const handleResize = () => {
    let image = document.getElementById('postImg');
    let parent = image.parentNode;
    // let imageRatio = image.naturalWidth / image.naturalHeight;

    if (width !== parent.offsetWidth) {
      setWidth(parent.offsetWidth);
      setHeight(parent.offsetWidth / ratio);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      <div className=" panel panel-default component-bg p-3 border">
        <div className="panel-body row ">
          <div className="col-1">
            <img src={props.img} width='50' height='50' />
          </div>
          <div className="col-11">
            <p className="mx-3 h6"><a>PeopleCert</a></p>
            <p className="mx-3 h6">{props.date}</p>
          </div>
        </div>

        <div className="panel-body">
          <div id="content" className="inline">{content}
          </div>
          <span onClick={handleTextVisibility} id="expander" type="button" className="btn btn-link pt-0">{isExpanded ? 'Show less' : 'Show more'}</span>
          <img id='postImg' src={props.img} width={width} height={height}/>
        </div>

        <div className="panel-body">
          <div className="row">
          </div>
        </div>

        <div className="container ">
          <div className="row ">
            <div className="col-3 pt-3 px-0 text-start">Likes {likes}</div>
            <div className="col-6"></div>
            <div className="col-3 pt-3 px-0 text-end">Shares {props.shares}</div>
          </div>
        </div>
        <hr className="mx-1" />

        <div className="panel-footer">
          <button onClick={handleLikeClick} id='like' className={`btn btn-default col-sm-4 mb-3 ${like ? 'btn-primary' : 'btn-outline'}`}>Like</button>
          <button id='comment' className="pull-right col-sm-4 btn btn-outline mb-3">Comment</button>
          <button id='share' className="pull-right col-sm-4 btn btn-outline mb-3">Share</button>
        </div>
      </div>

      <div className="my-5"></div>
    </>
  )
}