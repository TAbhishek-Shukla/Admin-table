import { useSelector ,useDispatch} from 'react-redux';
import styled from 'styled-components'
import {MdDeleteForever} from 'react-icons/md'
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
    const dispatch=useDispatch();
    const data = useSelector((state) => {
        return state.users;
    })
    
    const deleteUser=(id)=>{
      dispatch(removeUser(id))  
    }
    return ( 
    <Wrappper>
        {
            data.map((user, id) => {
                return <li key={id}>
                    {user}
                    <button className='btn-delete' onClick={()=>{ deleteUser(id)}}>
                        <MdDeleteForever className='del-icon'/>
                        </button>
                </li>
            })
        }
    </Wrappper>)
}

const Wrappper = styled.section`
li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    text-transform: capitalize;
    &:first-child{
        border-top:1px solid #eee;
    }
.btn-delete{
    color: red;
    background: none;
    font-size: 3rem;
    border: none;
}
}
`;
export default DisplayUsers;