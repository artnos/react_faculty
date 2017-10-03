#  React Faculty Finder

A simple React Faculty Filter
With Search, Filter by lastname and country
and optional modal pop up

**<a href="http://demo.artsir.com/react_faculty/dist/">Demo</a>**

## Getting Started

You will need to have node.js installed and install webpackserver globally
```
 //git clone this repo
 npm install webpack-dev-server -g
 //cd to root directory
 npm install
 npm start
 //for production
 npm run prod
```


### Data
Data structure is json with these attributes. 
```
{
    id: number
    firstname: string
    mi: string
    lastname: string
    degree: string
    title:string
    institution:string
    country:string
    address:string
    fullname:string
}
```
Right now i have dummy data. To add your own data.

```
//in App.js
    //set these two properties to null 
    constructor(props){
        this.state = {
            allProfiles: null
            filteredProfiles://null
    ...
    }    
            
    componentDidMount(){
        //uncomment the fetch command and put in your own string
    }
    
```
### Deployment

For deployment copy files from dist folder.

### Future
I probably wont get to these but I want to clean up and remove all the declared proptypes. And finish the faculty popup. This was used in production and also used as a demo.

### Authors

* **Art Siriamonthep** 

Credit to Petr Tichy for webpack configuration 
https://ihatetomatoes.net/