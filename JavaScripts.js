function ShowAdvice(){
    document.getElementById('FeedForm').reset()
    document.getElementById("Ftitle").setAttribute('value','An Advice')
    document.getElementById("Fadvice").checked = true
    document.getElementById('Ftitle').readOnly = true
    }

function ShowComplaint(){
    document.getElementById("FeedForm").reset();
    document.getElementById("Ftitle").setAttribute('value','A Complaint')
    document.getElementById("Fcomplaint").checked = true
    document.getElementById('Ftitle').readOnly = true
    }

function ShowOthers(){
    document.getElementById("Ftitle").setAttribute('value','')
    document.getElementById('Ftitle').readOnly = false
    }