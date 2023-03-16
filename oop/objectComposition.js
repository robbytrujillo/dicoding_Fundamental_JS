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

// Solusinya meninggalkan pewarisan dan gunakan teknik object composition
class Developer1 {
  constructor(name) {
    this.name = name;
  }

  commitChanges() {
    console.log(`${this.name} is commiting changes...`);
  }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying App...`);
        }
    }
}

// Fungsi Object menggunakan method Object.assign() 
function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}