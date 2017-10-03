import _ from "lodash";
import React from 'react';
import data from './data/Data';
import SelectorABC from './SelectorABC';
import ProfileList from './ProfileList';
import SelectCountry from './SelectCountry';
import Search from './Search';
import SelectRegion from './SelectRegion';
import Modal from './Modal';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            letters :[null,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
            allProfiles: data, //null
            filteredProfiles: data, //null
            activeABC: null,
            activeRegion: 'International',
            activeCountry: null,
            activeSearch: null,
            filterLetter: false,
            loading: true,
            faculty_id: null

        }
    }

    componentDidMount() {

        /*
         const URL = 'yourURL';
        fetch(URL,{
            //method: 'GET',
            //mode: 'no-cors',
            //credentials: 'omit'
            //xhrFields
            //withCredentials: true
        }).then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }                    // Examine the text in the response
                    return response.json()
                }
        ).then( (json) => {
            //console.log('loaded');
            this.setState({
                allProfiles: json,
                filteredProfiles: json
            }, function(){
                 this.filterProfile();
            })
        }).catch(function(err) {
                console.log('Fetch Error :-S', err);
        });
        */

    }


    filterByLastname = (letter) => {
        this.setState({
            activeSearch: null,
            activeABC: letter,
            filterLetter: false
        }, function(){
            this.filterProfile();
        });
    }

    filterByCountry = (e) => {
        console.log(e.target.dataset.type );
        let activeRegion = 'International';
        if( e.currentTarget.textContent == "United States"){
            activeRegion = "USA";
        }
        this.setState({
            activeSearch: null,
            activeRegion: activeRegion,
            activeCountry: e.currentTarget.textContent,
            activeABC: null,
            filterLetter: true
        }, function(){
            this.filterProfile();
        });
    }

   filterRegion = (e) =>{
        this.setState({
            activeSearch: null,
            activeRegion: e.currentTarget.textContent,
            activeCountry: null,
            activeABC: null,
            filterLetter: true
        }, function(){
           this.filterProfile();
        });
    }

    profileSearch = (term) =>{
        //console.log(term);
        this.setState({
                activeSearch: term,
                activeRegion: 'ALL',
                activeCountry: null,
                activeABC: null,
                filterLetter: null,
                letters :[null,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        }, function(){
                this.filterProfile();
                console.log(term);
        })


    }

    filterProfile = () => {
        const {  activeRegion,activeABC,activeCountry,activeSearch,allProfiles,filteredProfiles,letters,filterLetter} = this.state;
        let newLetters = letters;
        const getResult = (allProfiles) => {
            let filteredProfiles = [];

            //filterByRegion and Country
            allProfiles.map(p => {
                const {country} = p;
                //console.log(activeCountry +' '+ country);
                    if (activeRegion === 'ALL' && activeCountry === null) {
                        filteredProfiles.push(p);
                        console.log('0');
                    } else if (activeCountry !== null && activeCountry === country) {
                        filteredProfiles.push(p);
                    } else if (activeRegion === 'International' && country != "United States" && activeCountry === null) {
                        filteredProfiles.push(p);
                    } else if (activeRegion === 'USA' && country == "United States" && activeCountry === null) {
                        filteredProfiles.push(p);
                    }


            })

            //filter again by lastname first letter
            if(activeABC != null){
                const filterABC = [];
                filteredProfiles.map(p=>{
                    if(p.lastname.toLowerCase().startsWith( activeABC ) ){
                        filterABC.push(p);
                    }
                })
                filteredProfiles = filterABC;
            }

            //generate letters
            if(filterLetter){
                newLetters = [null];
                let formatLetter;
                filteredProfiles.map(p=>{
                    formatLetter = p.lastname.substr(0,1).toLowerCase();
                    if(!newLetters.includes(formatLetter ) ){
                        newLetters.push(formatLetter );
                    }

                });
            } else {
                newLetters = letters
            }

            if(activeSearch != null){
                const filterSearch = [];
                filteredProfiles.map(p=>{
                    if( p.firstname.toLowerCase().includes(activeSearch.toLowerCase())
                        || p.lastname.toLowerCase().includes(activeSearch.toLowerCase())

                        //|| p.institution.includes(activeSearch)
                    ){
                        filterSearch.push(p);
                    }
                })
                filteredProfiles = filterSearch;
            }
            //newLetters = [null,'a','b'];


            return  filteredProfiles;
        }
        this.setState({
            filteredProfiles: getResult(allProfiles),
            letters: newLetters,
            loading: false
        })
    }

    modalActive = (id) => {
        console.log(id);
        // this.setState({
        //     faculty_id: id,
        // });
    }

    closeModal = () => {
        // this.setState({
        //     faculty_id:null,
        // });

    }


      render(){
        const {letters,activeRegion,activeCountry,activeABC,filteredProfiles, allProfiles,filterLetter,activeSearch,loading, faculty_id} = this.state;
        const delaySearch = _.debounce(term => {
              this.profileSearch(term);
          }, 300);

        return (
            <div className="container">
                <div className="page-header">
                    <h2 itemprop="name">
                        Faculty
                    </h2>
                </div>
                 <div className="row">
                    <Search onSearch={ delaySearch } activeSearch={activeSearch} />
                </div>
                <SelectRegion onSelect={this.filterRegion} active={activeRegion} />
                <div className="pull-left activeCountry">
                      {activeRegion && activeCountry == null ?(activeRegion + ' Faculty'):('')}
                      {activeCountry?(activeCountry):('')}
                      {activeABC ?(' > ' + activeABC.toUpperCase()):('')}
                </div>
                <SelectCountry data={allProfiles} onSelect={this.filterByCountry}/>
                <div className="clearfix"></div>
                <SelectorABC letters={letters} active={activeABC} onSelect={this.filterByLastname} filterLetter={filterLetter} />
                <ProfileList data={filteredProfiles} selectFaculty={this.modalActive}/>
                { faculty_id !== null? <Modal faculty_id={faculty_id} closeModal={this.closeModal} /> : '' }

            </div>
        )
    }
}

export default App;



//http://www.crf.org/tct/about-tct/tct-faculty?tmpl=component&task=lecturer&sid=1228&modal=1
