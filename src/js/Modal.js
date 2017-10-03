import React, { Component } from 'react';
//import ModalSessions from './modalSessions';



class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            facultyData: null
        }
    }

    componentDidMount() {
        const {faculty_id} = this.props
        /*
         const URL = 'YOUR FACULTY JSON';

         fetch(URL).then(
         function(response) {
         if (response.status !== 200) {
         console.log('Looks like there was a problem. Status Code: ' +
         response.status);
         return;
         }                    // Examine the text in the response
         return response.json()
         }
         ).then( (json) => {
         console.log('modal Loaded')
         console.log(json);
         this.setState({
         loading: false,
         facultyData: json
         }, function(){


         });


         }).catch(function(err) {
         console.log('Fetch Error :-S', err);
         });
         */
    }

    renderDetails = () =>{
        if(this.state.facultyData === null){ return (<div>Loading...</div>)}
        const {fullname, title,  institution, address, presentations, id} = this.state.facultyData;
        const faculty_image_url = "http://www.crfeventfaculty.com/faculty/photos/thumbnail/" + id + ".jpg";

        return (
            <div  id="details-wrapper">
                <div id="faculty-image"><img src={faculty_image_url} /></div>
                <h2>{ fullname }</h2>
                <p>
                    <span dangerouslySetInnerHTML={{__html: title }} />
                    <span dangerouslySetInnerHTML={{__html: institution }} />
                    <span dangerouslySetInnerHTML={{__html: address }} />
                </p>
                { presentations !== null ? <h3>Presentations</h3> : ''}
                { presentations !== null ? presentations.map(p=>{ return <ModalSessions key={p.id} session={p} /> }) :
                    <p>No presentations found for this speaker</p> }
            </div>
        )
    }
    render()    {
        const {closeModal, faculty_id} = this.props;
        const {loading} = this.state;


        return (
            <div className={`modal ${!loading? 'in':'in'}`}>
                {loading?<span className="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></span>:
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={(e)=>closeModal(e)}><span
                                    aria-hidden="true">&times;</span></button>
                                <div className="clearfix"></div>
                            </div>
                            <div className="modal-body">

                                <iframe src={`http://www.crf.org/tct/about-tct/tct-faculty?tmpl=component&task=lecturer&sid=${faculty_id}&modal=1`}></iframe>
                            </div>
                        </div>
                    </div>
                }








            </div>
        );
    }
};


export default Modal;


/*{this.renderDetails()}*/


