import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal'
import { PostsContext } from '../../PostContext';
import { api } from '../../services/api';
import { Container } from './styles';

interface NewPostModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewPostModal({isOpen, onRequestClose}: NewPostModalProps): JSX.Element{
    
    const {createPost} = useContext(PostsContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [post, setPost] = useState('');
    
    async function handleCreateNewPost(event: FormEvent){
        event.preventDefault(); 

        await createPost(
            {
                title,
                author,
                post
            }
        )

        setTitle("");
        setAuthor("");
        setPost('');
        onRequestClose();
    }

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewPost}>
                <h2>ADD NEW POST</h2>
                
                <div id="formInput">
                    <label htmlFor="titulo"><h4>TITLE</h4>
                        <input 
                        type="text" 
                        id='titulo'
                        placeholder='Title'
                        size={40}
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        />
                    </label>
                    <label htmlFor="post"> <h4>POST</h4>
                        <textarea 
                            name="post" 
                            id="post" 
                            rows={10}
                            cols={40}
                            value={post}
                            onChange={(event) => setPost(event.target.value)}
                        />
                    </label>
                    <label htmlFor="author"><h4>AUTHOR</h4>
                        <input 
                        type="text" 
                        id='author'
                        placeholder='Author'
                        size={40}
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button type='submit'>
                        <span>POST</span>
                    </button>
                </div>
            </Container>   
        </Modal>
    )
}