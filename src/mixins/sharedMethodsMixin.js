//This mixin contains methods and variable names that are being shared across the deliveries and deductions views
export default {
    data() {
        return {
            errorText: '',
            farmer: {
                name: '',
                Firstname: '',
                Lastname: '',
                Othername: '',
            },
        }
    },
    created() {
    
    },
    watch: {},
    computed: {
        // search for errors on input form
        error () {
            return this.username.trim().length < 7 ? 'Please enter a longer username' : ''
        }
    },
    methods: {
        display() {
            this.showHello = !this.showHello;
        },
        // split farmer names
        splitFarmername(name){
            // split the names
            let namesArray = name.split(' ');
            if ( name === '' || namesArray.length < 2) {
                this.errorText = 'A valid farmer full name has atleast 2 names'; 
                // console.log(this.errorText);
                return          
            }
            this.errorText = '';
            // fill the farmers' first and last names
            [this.farmer.Firstname, this.farmer.Lastname] = namesArray;                
            // if the farmer has more than two names
            if (namesArray.length > 2) {
            this.farmer.Othername = namesArray.slice(2).join(' ');
            }
        },
    }
}
