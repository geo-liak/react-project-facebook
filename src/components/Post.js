import { useEffect, useState } from "react";
import '../css/App.css';

export default function Post(props) {

  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(props.likes);
  const [firstRender, setFirstRender] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
  }

  useEffect(() => {
    handleResize();

    let content = document.getElementById('content');
    let totalChars = content.innerText.length;

    if (totalChars <= 280) {
      document.getElementById('expander').style.visibility = 'hidden';
    }

    if (totalChars > 280) {
      let breakpoint = content.innerText.indexOf(' ', 280);
      let contentText = content.innerText.substring(0, breakpoint) + '...';
      content.innerText = contentText;
    }

    // let contentText = document.getElementById('content').innerText;

    setFirstRender(false);
  }, []);

  useEffect(() => {
    console.log(like);
    if (!firstRender) {
      if (like) {
        document.getElementById('like').classList.add('btn-primary');
        document.getElementById('like').classList.remove('btn-outline');
        setLikes(likes + 1);
      } else {
        document.getElementById('like').classList.remove('btn-primary');
        document.getElementById('like').classList.add('btn-outline');
        setLikes(likes - 1);
      }
    }

  }, [like]);

  const handleResize = () => {
    let image = document.getElementById('postImg');
    let parent = image.parentNode;
    let imageRatio = image.naturalWidth / image.naturalHeight;

    if (image.width !== parent.offsetWidth) {
      image.width = parent.offsetWidth;
      image.height = (parent.offsetWidth / imageRatio);
    }
  }

  const handleTextVisibility = () => {
    let content = document.getElementById('content');
    console.log('expanded: ' + expanded)
    if (!expanded) {
      content.innerHTML = '';

      (props.content.map((paragraph, index) => {
        let newParagraph = document.createElement('p');
        // newParagraph.setAttribute('key', index);
        newParagraph.appendChild(document.createTextNode(paragraph));
        content.appendChild(newParagraph);
      }))
    } else {
      let breakpoint = content.innerText.indexOf(' ', 280);
      let contentText = content.innerText.substring(0, breakpoint) + '...';
      content.innerText = contentText;
    }
    setExpanded(!expanded);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
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
          <div id="content" className="inline">{props.content.map((paragraph, index) => { return (<p key={index}>{paragraph}</p>) })}
          </div>
          <span onClick={handleTextVisibility} id="expander" type="button" className="btn btn-link pt-0">{expanded ? 'Show less' : 'Show more'}</span>
          <img id='postImg' src={props.img} />
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
          <button onClick={handleLikeClick} id='like' className="btn btn-default col-sm-4 btn-outline mb-3">Like</button>
          <button id='comment' className="pull-right col-sm-4 btn btn-outline mb-3">Comment</button>
          <button id='share' className="pull-right col-sm-4 btn btn-outline mb-3">Share</button>
        </div>
      </div>

      <div className="my-5"></div>
    </>
  )
}