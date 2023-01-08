import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './SubscriptionModal.css' ;
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SubscriptionConfirm(props){
    return (
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{backgroundColor:"black" , color:"white"}}>
            <div className="modal-header border-0">
             
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" style={{color:"white"}}>&times;</span>
              </button>
            </div>
            <div className="modal-body ">
             <div >
              <a href="payment"> <img src="699planind.png" width="360px" height="255px" /></a>
             </div>
            </div>
            
          </div>
        </div>
      </div>
    );
    
}
export default SubscriptionConfirm