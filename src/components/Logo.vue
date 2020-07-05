<template>
    <div class="main_container">
        <div class="spans">
            <div>
            <span class="feco">feco</span>
            <span class="llave">.</span>
            <span class="key">{{key}}</span>
            <span class="cursor" v-if="!(result !== '')">|</span>
            </div>
            <div class="result-container">
                <transition name="fade">
                    <div v-if="result !== ''">
                        <span class="arrow"> ➡️ </span> 
                        <span class="result"> {{result}}</span> 
                    </div>
                </transition>
            </div>
        </div>
        <div class="socialnets">
            <b-button
            icon-right="linkedin"
            type="is-text"
            size="is-large"
            tag="a"
            target="_blank"
            href="https://www.linkedin.com/in/francocolares/"
            rounded
            >
            </b-button>
            <b-button
            icon-right="twitter"
            type="is-text"
            size="is-large"
            tag="a"
            target="_blank"
            href="https://twitter.com/fecocode"
            rounded
            >
            </b-button>
            <b-button
            icon-right="instagram"
            type="is-text"
            size="is-large"
            tag="a"
            target="_blank"
            href="https://www.instagram.com/fecocode/"
            rounded
            >
            </b-button>
            <b-button
            icon-right="github"
            type="is-text"
            size="is-large"
            tag="a"
            target="_blank"
            href="https://github.com/fecocode/"
            rounded
            >
            </b-button>
            <b-button
            icon-right="email"
            type="is-text"
            size="is-large"
            tag="a"
            target="_blank"
            href="mailto:hola@fecocode.com"
            rounded
            >
            </b-button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Logo",
    data(){
        return{
            feco:{
                name: 'Franco',
                lastName: 'Colares',
                age: this.calcAge(),
                location: 'Córdoba, AR',
                hair: 'null',
            },
            key: '',
            result: '',
            keyIndex:0,
        }
    },
    mounted(){
        this.nextKey(0);
    },
    computed:{
        keysArray(){
            return Object.keys(this.feco);
        },
    },
    methods:{
        addLetter(letter){
            this.key += letter;
        },
        calcAge(){
            const dob = new Date(1996, 12, 19)
            const diff_ms = Date.now() - dob.getTime();
            const age_dt = new Date(diff_ms); 
            return Math.abs(age_dt.getUTCFullYear() - 1970);
        },
        writeKey(text){
            
            const arrayText = text.split("");
            let letterIndex = 0;

            const interval = setInterval(()=>{
                if(letterIndex < arrayText.length){
                    this.addLetter(arrayText[letterIndex]);
                }else if(letterIndex === arrayText.length+1){
                    this.showResult(text)
                    
                }else if(letterIndex === arrayText.length+8){
                    this.result = '';
                }else if(letterIndex > arrayText.length+9){
                    clearInterval(interval);
                    this.nextKey(this.keyIndex+1)
                }
                letterIndex++;
            },300)

        },
        showResult(key){
            this.result = this.feco[key];
        },
        nextKey(key){

            if(key < this.keysArray.length)
                this.keyIndex = key;
            else
                this.keyIndex = 0;
            this.key = '';
            this.result = '';
            this.writeKey(this.keysArray[this.keyIndex])
        }
    }
}
</script>

<style>

.main_container{
    width: 100%;
    position: relative;
    font-size: 4em;
    padding-top: .5em;
}

.socialnets{
    text-align: start;
    font-size: .2em;
    margin-top: 2em;
}

.llave{
    color: #006680;
    font-size: 1em;
}

.cursor{
    font-size: .7em;
    animation: .7s cursor ease-out alternate-reverse infinite;
}

.result,.key, .arrow{
    font-size: .7em;
}

.spans{
    display: flex;
    align-items: baseline;
}

.result-container{
    margin-left: .25em;
}

.soft-arrow{
    display: none;
}



@keyframes cursor {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@media only screen and (orientation: portrait){
    .spans{
        flex-direction: column;
        padding: .25em;
    }
    .result-container{
        margin-left: .25em;
        height: 50px;
    }
    .main_container{
        font-size: 2.7em;
    }
}

</style>
