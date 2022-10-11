import { Container } from "./styles";
import  { BiTrashAlt } from "react-icons/bi"
import { IconContext } from "react-icons";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { PostsContext } from "../../PostContext";

export function Blogbody(){

    const { posts } = useContext(PostsContext);

    return(
        <Container>
            {
                posts.map(post => (

                    <div key={post.id} className="buttons">
                         <dl>
                          <dt className="listTitle">{post.title}</dt>
                             <dd className="listBody">{post.post} </dd>
                             <dd className="listFooter"> {post.author}</dd>
                         </dl>
                        
                         <IconContext.Provider value={{ size: "1.3rem" }}>
                             <button
                            type="button">
                                 <BiTrashAlt />
                             </button>
                         </IconContext.Provider>
                     </div>
                    )
                )
            }
        </Container>
    );
}