import React, {useState, useEffect} from 'react';
import Dexie from "dexie";

export default function Idea()
{
    const db = new Dexie("ReactDexie");
    db.version(1).stores({
        posts: "title, content, file"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })
    
    const [postTitle, setTitle] = useState("");
    const [postContent, setContent] = useState("");
    const [postFile, setFile] = useState("");
    const [posts, setPosts] = useState("");


    const getFile = (e) => {
        console.log(e)

        let reader = new FileReader();
        reader.readAsDataURL(e[0]);
        reader.onload= (e) => {
            setFile(reader.result);
        }
    }
  
    const deletePost = async(id) => {
        console.log(id);
        db.posts.delete(id);
        let allPosts = await db.posts.toArray();
        setPosts(allPosts);
    }


    const getPostInfo = (e) => {
        e.preventDefault();
        if(postTitle !== "" && postContent !== "" && postFile !== ""){
            let post = {
                title: postTitle,
                content: postContent,
                file: postFile
            }
           
    
            db.posts.add(post).then(async() => {
                let allPosts = await db.posts.toArray();
                setPosts(allPosts);
            });
            
        }
        
        
    }

    useEffect(() => {

        //get all posts from the database
        const getPosts = async() => {
            let allPosts = await db.posts.toArray();
            setPosts(allPosts);
        }
        getPosts();
  
    }, [])



    let postData;
  
  
    if(posts.length > 0) {
      
        postData = <div style={{display: "inline-block"}}>
                    {
                        posts.map(post => {
                         
                             return <div className="card m-2" 
                             style={{
                                width: "18rem", 
                                border: " 2px solid #000",
                             }} 
                                key={post.title}>
                                        <img src={post.file }/>
                                            <h2 className="card-title">{post.title}</h2>
                                            <p className="card-text">{post.content}</p>
                                            <button className="btn btn-dark" onClick={() => deletePost(post.title)}>Delete</button>
                                        </div>
                                               
                        })
                    }
                   </div>
    }else{
        postData = <div className="message">
                     <p>There are no posts to show</p>
                   </div>
    }

    return (
    <React.Fragment>
        
        <form onSubmit={getPostInfo}>
           <div className="form-group">
           <label style={{display: "block"}}>Describe your next tattoo</label>
            <input type="text" name="title" className="form-control" style={{ width: "25rem", display:"inline-block"}} onChange={e => setTitle(e.target.value)} />
           </div>
           <div className="form-group">
           <label style={{display: "block"}}>Give us some details</label>
            <textarea name="content"  className="form-control" style={{ width: "25rem", display:"inline-block"}} onChange={e => setContent(e.target.value)} />
           </div>
           <div className="form-group">
            <label htmlFor="cover" className="form-group p-2">Or submit your own design</label>
            <input type="file" id="cover" name="file"   onChange={e => getFile(e.target.files)} />
           </div>
            
            <input className="btn btn-dark" type="submit" value="Submit" />
        </form>
        {postData}
      
    </React.Fragment>
  );
}