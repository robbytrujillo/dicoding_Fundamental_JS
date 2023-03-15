// Object Composition
// ==================

class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`{this.name} is comitting changes...`);
    }
}

class FrontEndDeveloper extends Developer {
    buildUI() {
        console.log(`{this.name} is building UI...`);
    }
}

class BackEndDeveloper extends Developer {
    buildAPI() {
        console.log(`{this.name} is building API...`);
    }
}

class FrontEndDeveloper extends Developer {
    deployApp() {
        console.log(`{this.name} is deploying App...`);
    }
}

class FullStackDeveloper extends Developer {
    buildUI() {
        console.log(`{this.name} is building UI...`);
    }

    buildAPI() {
        console.log(`{this.name} is building API...`);
    }

    deployApp() {
        console.log(`{this.name} is deploying App...`);
    }
}



