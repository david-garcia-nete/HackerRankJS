class Node {
    constructor(str){
        this.str = str;
        this.leftChild;
        this.rightChild;
    }
}

class Tree{
    constructor(a, b){
        this.b = b; 
        this.found = false;
        this.root = new Node(a);
        this.createTree(this.root, 0);
    }
    createTree(root, i){
        if(this.compare(root.str)){
            this.found = true;
            return;
        }
        if(i>root.str.length-1)return;
        if(this.isLowercase(root.str[i])){
            root.leftChild = new Node (this.deleteIndex(i, root.str));
            root.rightChild = new Node (this.toUppercase(i, root.str));
            if(root.leftChild.str){
                if(this.possible(root.leftChild.str, i)) this.createTree(root.leftChild, i);
            } 
            delete root.leftChild;
            if(root.rightChild.str){
                if(this.possible(root.rightChild.str, i)) this.createTree(root.rightChild, i+1);
            } 
        }else{
            this.createTree(root, i+1);
        }
    }
    deleteIndex(i, str){
        var copy = [];
        for(var j = 0; j<str.length; j++){
            if(j!=i)copy.push(str[j]);
        }
        return copy;
    }
    compare(str){
        if(str.length!=this.b.length)return false;
        for(var i = 0; i<str.length; i++){
            if(str[i]!=this.b[i])return false;
        }
        return true;
    }
    toUppercase(i, str){
        var copy = [];
        for(var j = 0; j<str.length; j++){
            if(j!=i){
                copy.push(str[j]);
            }else{
                copy.push(this.toUppercaseIndex(str[j]));
            }    
        }
        return copy;
    }
    isLowercase(x){
        var alph = 'abcdefghijklmnopqrstuvwxyz';
        for(var i = 0; i < alph.length; i++){
            if (alph[i]==x) return true;
        }
        return false;
    }
    toUppercaseIndex(x){
        var lowAlph = 'abcdefghijklmnopqrstuvwxyz';
        var loc;
        for(var i = 0; i < lowAlph.length; i++){
            if (lowAlph[i]==x) loc = i;
        }
        var upAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return upAlph[loc];
    }
    possible(str, i){
        var strP = 0; var bP = 0;
        while(strP < i && bP < this.b.length){
            if(str[strP] == this.b[bP] || this.toUppercaseIndex(str[strP]) == this.b[bP]){
                strP++; bP++;
            }else{
                if(!this.isLowercase(str[strP])) return false;
                strP++;
            }
        }
        while(strP < i){
            if(!this.isLowercase(str[strP])) return false;
            strP++;
        }
        return true;
    }
}

// Complete the abbreviation function below.
function abbreviation(a, b) {
    var tree = new Tree(a, b);
    if(tree.found)return 'YES';
    return 'NO';
}

a = 'hHhAhhcahhacaccacccahhchhcHcahaahhchhhchaachcaCchhchcaccccchhhcaahhhhcaacchccCaahhaahachhacaahhaachhhaaaCalhhchaccaAahHcchcazhachhhaaahaahhaacchAahccacahahhcHhccahaachAchahacaahcahacaahcahacaHhccccaahaahacaachcchhahhacchahhhaahcacacachhahchcaAhhcaahchHhhaacHcacahaccccaaahacCHhChchhhahhchcahaaCccccahhcaachhhacaaahcaaaccccaacaaHachaahcchaahhchhhcahahahhcaachhchacahhahahahAahaAcchahaahcaaaaahhChacahcacachacahcchHcaahchhcahaachnachhhhcachchahhhacHhCcaHhhhcaCccccaaahcahacahchahcaachcchaachahhhhhhhhcahhacacCcchahccaaaaaHhhccaAaaaCchahhccaahhacaccchhcahhcahaahhgacahcahhchcaaAccchahhhaahhccaaHcchaccacahHahChachhcaaacAhacacaacacchhchchacchchcacchachacaahachccchhhaccahcacchaccaahaaaccccccaaaaaaaHhcahcchmcHchcchaaahaccchaaachchHahcaccaaccahcacacahAhaacaacaccaccaaacahhhcacAhaCchcaacCcccachhchchcchhchahchchahchchhchcacaachahhccacachaAhaaachchhchchchhaachahaahahachhaaaccacahhcacchhhaaachaaacAahhcachchachhhcacchacaaChCahhhccahChaachhcahacchanaaacchhhccacacchcahccchAcahacaaachhacchachccaaHacaacAhahcCh';
b = 'HAHHCHAACCCAHCHHAHHAHCACCHCCHHCAAHHCACCCAHHHACAAHHHHCHHCAHHAHHAAAHAACAAHAHHCAHAHACHACHCHACACHAAHHAAAHCAHHACACAACHHHCHAHCAHCHHHAHAHACCAAAHCHHCHHCCAACCCCAACHACAACAAHACHCHAHHACCHCAHHHAAACHACAACHCACACAHHCCHAHACCCACCAACHCHHHCCCCCHCCAHHCAAHHAHHHHHHHAACCCCAHCCAAAAAHHHAAAACCAHHCAHACACCHHCHAHAHHCHAACHHHHHCCHCCAHAHCHCAAACCACCCCHACCACHHACHHACACHACCAACCCCAAAAHHAHCHHHCCAHCCHACHHAHCCACACCHAHAAACACCCCAHCCAHACCCCCCHCCHHCHHHHCHCHCAHHHACHAHAACCCAAAACHAACAAAHHAAHAAAHACHHCACHCCHCHAACHACACHHCCCCCAHCACHAAAHCHCAHACAAC';
console.log(abbreviation(a, b));
a = 'XbxxobxBobbbxooXobXxxBOXoOboxxbobXOoBbxbXooXBboxooOxxXbboxoOxlobbObbXoXXbbXobbbXoxbxXBxoobooxbxoxoxOxxOxbxbxXobbbbBbxoxoooxooobXxbooBbOXxXxbxqobbbboXxoXXbbbxObXXxobOXXOxoOoxoXOXBxOxBoxbobxoBxbobobXooOxxOBXbxxXbooxbxooOxoxoobxxBOxxbbbxBxzXxbBxOobBObooofbbBXXOxxoxxbXBbOboxxooBbxOoboXoooXBbBbooOoBbbObxobxbBBoOxoxobBoOXXobObxobxOObobbbxxoboxoXxbXoxxxxbbobbXoXooBXXxboxbobxxxXboxOoOoxBoboOXboBoobXobxXdxObbbBxbxBbOOXbxooXboxboonxxxXOBbbXXoobooxbbxboxoOxBBbxBOxoobXbbxxbXXObxBbxBXBxoxOxoBbxBobOXbboxooBxbooXbXbooBbbxXboxXbxXoxbboxOXOooXbobooXXoxobbxoOxOoBbxxoBboboxoOBBxoboBoOboxbbxxbbbObXbboXbObOjXOXBxbxXobbbboBxBoOooxbxxOooxxbxxobbobxbbXoOobbBXoObxobXxoobxBxBbxoobXxoxObboxobobooxOoooBBbbbxxXoxbXxoXooxOBxboobxooxXOxobXoXmObxxXObooXXXboOXxbXxObxxbbObObxbxxbxxBXxBxoxOooaxooxXBXoXOxoOXxbBoBXxXooboXboOooxoxOxXxbxoboOObbBoXxbboxxooBBbooxXBbBoxBOobbboobobooxoxOxoXOXXboxXOboBxoboOooxbxBxobooXOoxOOObbxbobxxoxbOBoBxboxoobbbxoooxBxoobBbobBbooOBbxoboooookxXoobbbbBbOoxOBOobXObXBxoXoboxobbXBXBBoxBxoxooOxobxo';
b = 'XBOBBOBOXOXBOXOOBOXOXOBBXOXBXOXXBBOBXOXXXOBBXBOOOXXOXBBBXOXOOOXXOBBOXXOBBXXXOXXXOXXOOXOXBOBBBXBBXOOXOBXXOOOOBXBOXXBXBXXXBXOBBOBBXXOXXBOBBXOXXBBOOOBBBOXBBBOXXBXXOBOBXOOOXXXXXXOBXXBOXXOOOOBOOOXBBOOBXOXXOBBBBOOXXOOXXXOBBXXOXBBOXOXBBBOXOBXXXBXXOBBXBOOBBBOXBBBOXBXBOBBXXXOXBOOXOOXBOXXOOOOBBBBOOBBOBOOBOBXBBOXBOBOXOXBXOBBOBBOXBOOXXBBBBBXOBXOBXXXBBBXOOBOOOXOOBBBXXOXXOXOBOXOBXXOXOOXXXOXXOBOOXBBXBOXBXXOXOXBOBXXOOXOOOXXBOOBBXXXBBOXBBXBOBBOOBOOXOXXBXOBOOOXBOXOOXOOOBBOBBOOOBBBBBOOBOXBBBOBOBXOXBXOBXBXBXBBBXOOO';
console.log(abbreviation(a, b));
a = 'laalsAsaasLbbabLslalBbssaAsAlSLsbBllsSalblsssbsaaaAsabBaaAaalsssasssssLbasbbllbbLSsslbabAbSlllsbsbbalbBaSaaalbslaabAAaaabsabSlsassSshBBllbAAllsSbaLblabsaLBasBsAlLaabBbAllbaslsllsaAaAabbSallbLalsslbbblbasBAsbaBLalbBssbbAlbbbsSlsllbaLBLaaLblalBSbsBbSsbbaaSlllsblbsSaaBbassslaalblBbslLlaASASbbabbLlbalSabbBbLsbaabbalsAAbSbBbABbabbabaallBsasllbsbbsslSsbBlBlbabaalblaLsllbasasalabllSsbslLbsllbLsBlaSbssSAbsSasbsSalsabbllbbaBSBlabsBlAsbaSLbSllbsAblllSLaaAlBssSsBSLslAAlsbslbalsbSbsbalbsBabSbbsssaaabassalslllbsSLSsaLlbbBslSlSbbslsbslSLbbSbAaaaalLlSlAslsbmslbbalblLabSslassBabllSAsbbsvLllSalalbsaaaLAaSSbLbblaaSbLaalABlabsAsBsalssbBLlsLssaabsslabpSbsBaBbbSBlsaaabbblslBAblsLaASlaAlbaaSssbblalAaasbaalbLlaabbAaaaaAalsabbsllaaAsallsasBbAaslbbsbllbbllbslaBASbbSblaAbbsbbssAaBbsasLllalBlslssasbssBALAasbbsbSfasabbllbAslbalbaSSlslbbSbsaBsAalablAbbaBBsbsSbdaAsBblsblbABbLAssAbalsbssSssbBBssAsABLssblsLbllSblasllLbBsassllBbBbsbBsbllsBBsAbbLLlAslBlsAAASlaalabasaLslasBLlsslsaaslsbblbAsalSlllsLSAaLlalAalsBsaslaaaalb';
b = 'ALASALABLABBASASLSBLSSLSSASBBAASSSLBBLLSSBAASLBBASBSLAAASSSSSBBLAALSALLBASBALLBBABASLLSAAAASLBBABABLABBALBSALBLLLBSSBSSAASSBBALALBBBSLLLASASLASABBBLASAASBBABAAALBLLBSSBBLBLBLLLAALLLSSSLLSLLBSSSABSSSSSBABSBLASBASSLBSLSASLAALBSBSLAASBSSBBSBBSSLLBSLSSLLBBLSLSSLBBSAALSASLSLBSABALSASLLLSLLAASSLBASBLAAABBABSBLLASASSBABBSBBBBLBABSLAASAASSSBLALAAASBLLBBAAABBLAABASSBBBLBLABASBSLAABBBSAABBASLLBSSSBBALASBSSBBASSLSBABABBBSSAABBLBABLAAABSBBSAABLSSSLSLLBALBBBBBSBBSABLLABLSAAASLABAALSABLSLBLBASASLLSALAABAAAALB';
console.log(abbreviation(a, b));
a = 'EerRrrreeReeeErEEEEeRErerrrreeeerreerRrrEeeeReerrrrErereeRRRrREReERrEerREeEsrrrREeErererrRreERrrErreeeEEeReRrerrrERrreeerrrreEerrerreRerrRerRererrereeeerrrrReRRRrRreerrererReRererRrRRerRRreRRrRrrrEeRrrEEeeEeerErrereErEerreeeREererrRRERrerrrrreEerRrrrEeRERreereeereErerrrrrererErerErREEereReeeEeerRrerrrrrrreerErreEReeererrreeeeeeeEereErreerEerrerERrrereeEeREeRerErErreRrrrRrreEERrrRErrRreeEeEeeeerreRerRreEReeEeRERRreReEeerEErrrERreeErerEeERrRrrReerrreeeEerrerrrerrrrreeerreEerReRRErEerreerReeeeerrRrrrrrreerRreeEEereeeeErrrrrererErREeRrrReerrErEeEeerRreeeeeRrERerRrrererreReerereeerreRreeereERrrErreeeeerrrrrEReErrRerrErereEeerrrerrEerreEeererRererReeeErEereeRrrerreEeRrrRrrErrEereRreeereErRerereeeeRrRrreeerrrereereeERrRrrrRRrrRReerEEEReerRrererREereerRrrerrEeeererRrERreEreRrrRreerReRerreereRRreeERrEeEreErEreERrerEerrereEeerereerrEREeeEerserrrrreeRrRerrrERreEersEReREEerRrerrrReErrRerreReerererrrRErrsEErrErEEerrEREreeErrrEereRrrErRereeerREeEeEeerrrererrrRrRrEreERrrrerEerrrRRrerreereeRereerreeee';
b = 'ERREREEEEEEREERREEERERRERRRERERRRRREREEREERREEERRREERERERRERREEERRRERRRRERRERRRRREERRRRRRRRRRRRERRRRRRERRRREERREEEEEREERERREEERRRERERERRERERRERRREEERREEEEREEEERRRREERERREREEEEEEEREREEEEREEREREEERRRREERREREEEEERREREERERRREEEEERREREEREEERRRRERERRRRREERERRRERERRRRERRREEREERRERERRREREERREERERRRREREREERRERERERERERRREEEEERREREERERRERREREERRREEERRREREREERERREEEERRRRRRREEERERREEEREERREREERRRRRRERRERREEREEREEERRREREEREREREEERERRERERERSERREERREREERRERREREREEREREEEREEREERERREREEEREEEERRERRREERRERERRREEEREE';
console.log(abbreviation(a, b));
a = 'YYRlYyrYYrLYYyrllRLzrLLRrRylyylrRRyYYLLYllyyLllyLrLrYlrryRsYYYYYlyRrrrRlRRrLlyrlLLLRYlrrrrrlrrylYRRLlllRyyYRlyyLYryrRyyryLiLylyryyrlRLLLrlLRLYrylYrLylyyRrLyyylYlLrrylYyrLLrwyRRylLRrllYRrrrYlLyyRLrLRlLLlLYLYYYlRyyYYRyrllrrlllyrLrlllLrylRRrLLrRRlyrrRRYyYlllyLrRLlRlrRrYyLLjyRLlLYyryYyrylrlrLyylRyryrLLyLYLyLYrYlLYrRRrlYlyrryRYllLLLyRrRRylLyYlYyRLRLlyRRlrrRRrlRlRlryRRyRYRrryYYYlYYrLlllYrlRRlryyllYyRlYyRLrRrLYYyLrrYllYRyLlylLlrlRlLlryLryRlYylRLYlLYrlyRrrrllYlYLLYRRrRRLLYLlYllYlyrLRylRYlLyLRLrRYLyRlmLLlYlLrRlLylLlrLYyyYYYrRlrrylyRylryrLryrlYrlLrYlyryryRLyLlYRlYyrYRyylryYRryyylRylryRRyllrlllYrYRrrlYyRRyrYlYpylRrRYRLyRRRrrrYRLylrlRyyRlylYLYYRYlryLlRLYyRLLYyllRlRlRlyylRYRlLlYlyRlYrYRYLyYRyRLrRYrYrLYyYYlRryrrlylYyrlRrryYllnRLyYlYryrRLlYyLryylYyRRYLrLlyrYlRLlRLryrylLLRLrlYYyLrLyrYLyLrYlYYrYYlrLrllYlllYYlrlRyYRyLRRRrLrlLyRLRRLrLRrLyLRYRLYyRLLyRRlRLllyrYlRllrLlLyLrLYlryYYlLyLlRRRrfyLLrlRlyYRLrYyYyYylyyyryllYLRRrLrylYlyRyYLlnrYrLyRRRyRYYYrYrRlyLryyrrrlygrrRRyRYRyrRRllRlrYlRylryLryylrryYlYlyrllLllyYYY';
b = 'YYRYYYLYYRLLLRRLRRYYLLYLLLLYYRYYYYYLRRRRLLLLRYRYRRLLRYRYLYRLLLRRLLLLRLYYLRLYLYLLRRLRLYRYLRLLRLLLLYLYYYRYYRLLRRLLRRLRRYYLLRLRLRYLLRLLYRYLRLLLYLLYYLYRRYRYLLLRRRLYYRLRLYRRRRRRYRRRYRRYYYYYLYRRRYRYYRLRLYYLRYYRLLLRLLRYYRLYLYRRRYYLLYRRRRLLYLLYYYLRRYLLRLRYLRLLYLRLLLYYYYRRRLYLLYRLLYRYYRYRRLRRLYYRYYRRRYYLRRYRLRRRYRLRRYLYYRYLRLRLYRLLYRRRRYRLLYLRYYRYLYRRLRRYYLYYYLRYYRYYRLYYRRLYLYRRYLLYRLRLLLRLYYLRLYLLYYYYYLLYYYRYRLRRRLLRLRRLLRLLRYRLYRLLRRRLYRYRLLLLYYYLLLRRRLLRYRLYYYYLRRLYRYLLYLRRRRYYYYRRLRRRRYRRRRRYRLYYLYYY';
console.log(abbreviation(a, b));
a = 'vvvkeevekVVvvkkKeeVvKvkevkvvkevevkeveekkkvekVkeEevVvkkKevekkkkekkekvevkevekkevEvEkEvvKkkveveKkKkkEekevkveKvkKkVeeEeeeekkekekvvkkvkeKvkKvkeKkKKEvvVekeKeKvvkeKvveeEEvkeveekVvekkkkevkkkkekVvvvkkEekkvkekVKvekVevvKkvvEveeekkEvevkekeveVkKevkVkeEvkeeEkkvekeevVvvvvkkvveKeevkkevvVekvKEEVvkvVkeVkEkkvvEekVkekevvVEEvvkKkkevEeVKvEekkVkVvkkevkvVeEeeeEvvkkkeVkeeVekEkeevkvVkKeevkKvkekvVevvvVkvKKKevekEvVekvEVeKkKKkvvevekvevkKvvvVvEEkEeveekKKVEKkkVKvKevkveVvVveeKVekEkkevvveveKeevkVvvEVeEkEkKkkeeeveeekekKeVvekevEKvkkkkVkEkekeEEekvkVVkekvKKkeeEvkeVkkekkvvKvKvEEVvvvVekkeeekEvvKvvvvVVEeeKVKvVekeekvvekvvekEeKekeEeVVEeeKEeEEvvveEevVEVkEvkeEkeveeeeevkkeVkVKvvvekeveKekeekvevkveEkKkkevEkKkvveKkkkvvEEvKKeVekVVkveeekEvkkvKvkvveEvKkvEvvveKKekevEeekKekkkkvKkkEvKkeEkvKvkevekVKVKvveKvkvvkkVvkvKEKvvvvkeekevkEVvKeKkkevVkkEEkkvkveVVvevevekkkeEevEkeVkeKkVekvEevkeeEvVKVeeVkVekkvevekEeKevvvkeevvvVevKvVevVvVkkevEeVkEvEvevEeevKkkevekkvEkvkvKkeveveekvveKvKeeeeekEkEkKeKkkkvkEkekvEekeekkvvvekveekeeveKekeVevEVekkKKKvkekkkEvkeekke';
b = 'VVVKEEVEKVVKKEEVVKEVKVVKEVEVKEVEEKKKVEKKEEVVKKEVEKKKKEKKEKVEVKEVEKKEVVKVVKKVEVEKKKEKEVKVEVKKEEEEEEKKEKEKVVKKVKEVKVKEKVVEKEEVVKEVVEEVKEVEEKVEKKKKEVKKKKEKVVVKKEKKVKEKVEKEVVKVVVEEEKKVEVKEKEVEKEVKKEVKEEKKVEKEEVVVVVKKVVEEEVKKEVVEKVVKVKEKKKVVEKKEKEVVVVKKKEVEVEKKKVKKEVKVEEEEVVKKKEKEEEKKEEVKVKEEVKVKEKVEVVVKVEVEKVEKVEKKVVEVEKVEVKVVVVKEVEEKKKVEVKVEVVEEEKKKEVVVEVEEEVKVVEKKKKEEEVEEEKEKEVEKEVVKKKKKKEKEEKVKKEKVKEEVKEKKEKKVVVVVVVEKKEEEKVVVVVVEEVEKEEKVVEKVVEKEEKEEEEEVVVEEVKVKEKEVEEEEEVKKEKVVVEKEVEEKEEKVEVKVEKKKEVKKVVEKKKVVVEEKKVEEEKVKKVVKVVEVKVVVVEEKEVEEKEKKKKVKKVKEKVVKEVEKVVEVKVVKKVKVVVVVKEEKEVKVEKKEVKKKKVKVEVEVEVEKKKEEVKEKEKEKVEVKEEVEEKEKKVEVEKEEVVVKEEVVVEVVEVVKKEVEKVVEVEEVKKEVEKKVKVKVKEVEVEEKVVEVEEEEEKKKEKKKVKKEKVEKEEKKVVVEKVEEKEEVEEKEEVEKKVKEKKKVKEEKKE';
console.log(abbreviation(a, b));
a = 'RreeerrEeRReReErrrReerresrERrrrReTrreEerRRerRrereeSeeererEeEeeErEREErrErrreeeerRerrrrRerEREeererSeRrReRerrrerrErEReeerrrrrReEreerReerRerREERreeeeRreReeeeeEErRRrrererreRreReeereRrerreRrREEeReEErrrreeErEeReRrrerrrEreereereeRrEeRrreREeeerEReREerrrrreerErEErrrrRErrrRrreeReReereERerereReRreEeeeeEEeerrrerRrrrrRerreeeEEereeereeEeeEseeReEreRRERrrrereerrererrEReerrrrrreeeRrreeeeeRRrsrrREererERRreereeRereEeRrRrRereEeeeRreEeerrRrereRerrrerererErRererrreeEeRRrErErrErrerrrreerrrreReeererersreReerEreRerReRRreEeeReereeEerrEEErrrEererreeerreeerrrrrEeeEEerrrReReeerreeREeEeREeReeeeREeRerERerreRereeslrrreeerERerErrRreRRrreEeererrrRRRreErrRREreeEeereeerrreeerrEerrrRRrerrerRReErRRrreEeeRereeEeERreEeEerREErReReRerrrreeERErereRreeReeeeeeErrreeerEeerEREeeReereerrrrerrErerrErerRrrErerrReEEerReeERRRrErereeeerERerRrRErSeEeeeeRrEereeeErrrREerERerReeeeReerRrreeEEeEerrereeeererEEERseeererRrrRerreersereeeRrreeEerrrrrreRERrErerrreRrrererRerererRreErEErrRrREreRrRrerReEeRrErrerererrreerreEReeRererrreReEEererREeEvRRrrer';
b = 'REEERRRERERERRRRETRERRRRRERESEEEEEEEREREEEERRRRRERERSRRRERRREEREERRREERREEREREEEERRRRRRREREEEREERRRREERRERRREEERRERREEEEERRRRERRRREEERRRREEEEEEERRRRREEEEEEEEEEESRERRERRRRRERRRERRRRRREREREEREERRRREREEREERRRERERRREERREERERRERRRESERERRRERREREEEEEEREERERREEREEEERREREEEREEERERRERRERREEEEERERRRRREERRRREERRRREEERERREEERRRRRERRREREEEREEEREERREREREEREEREEEERREEREEEREREEREERERRERRERRREEEERREERRREREERERRRERSEEEEREERERREERERERREEEREEREEERSERRREREEERREERRRRERERREERERERREEREERRRERRREEREEEREEREERERREEEEREEERRR';
console.log(abbreviation(a, b));
a = 'ANzaNanaanAZnnaazzzNAznnZaaZzzaZzzznaaaaZAANnaaanZnzazaAANanZaznazznzaAaNznazzanaZznzANzznzaaZzAnanNanzzAazzZZananazAznaznNznaAAaZnnanzazANAANAnnnzazaaaanzaznAaaNZnNAnnanazaZzNzazanZnazaAzanazzaNznNzzzaaanZaAnNAanzznNaNznanAnananNnaazznznnzNznnNzzanzAaNzzzZzAnnznaanzZznzNZzZzznnnaazzzanaazzazznnanANnznzAZzNZnNnanzazNaZZzzazAnNzAzAZAazanzzZzaznnZzaaazzznnaanaazaAnzzzZaaazzzzNaaNazzaaANznazAannzAaZZaznnzznnAzaaaanaaAznazZAnzzaAzaZzzZzznzazAznnaznznnaNAazZzzazNazanzaanZaZznnznzaNzannnZZNnaznzaNaAZznazAzAzNnnanznannaznAznnnnazzNnaazAanzZnaAnnaAzaanZnZNNzannanznazAnzNanaZznAAnnnNzaznAnZZnznaanzzaNzzAZzaNzNzaZanaNzNnnnAnaaZnaaznanZnzaannanzAzazazaNannaaznNnNnzaazazAzAnAzzaNaaNnanzaaZANaaZnaAzazaZZZAznAaaZnaAnnAanaAAnznNNzNnanZzzZzzNzaZaaznnznzNnaNZannNzAnnnznAazaaaanZzzananznzzZznNNzzznnznannZzznzzaZazaNnnnZzanznazzazzanzazzZannzAzazAZnnzNZannzZaNznAZanaaanAnNzzznzZaanANZananzzZaNzzaZnnzazZanzznAaaAZZaznANNzanaaanNzAnaanaAzzZnNannznaNznANzznzZanaNNaZnzaznzZaanzznnnAANzzZananzNZnaaZaANZzNAAaz';
b = 'ZAANAANNNAAZZZZNNAAZZAZZZNAAAANAAANNZAZAANAZNAZZNZAAZNAZZANAZNZZZNZAAZNANANZZAZZANANAZZNAZNZNAANNANZAZNNNZAZAAAANZAZNAANNNANAZAZZAZANNAZAZANAZZAZNZZZAAANANANZZNAZNANNANANNAAZZNZNNZZNNZZANZAZZZZNNZNAANZZNZZZZNNNAAZZZANAAZZAZZNNANNZNZZNNANZAZAZZAZNZZAZANZZZAZNNZAAAZZZNNAANAAZANZZZAAAZZZZAAAZZAAZNAZANNZAAZNNZZNNZAAAANAAZNAZNZZAZAZZZZNZAZZNNAZNZNNAAZZZAZAZANZAANAZNNZNZAZANNNNAZNZAAZNAZZZNNANZNANNAZNZNNNNAZZNAAZANZNANNAZAANNZANNANZNAZNZANAZNNNNZAZNNNZNAANZZAZZZAZZAANAZNNNNAANAAZNANNZAANNANZZAZAZAANNAAZNNNZAAZAZZNZZAAANANZAAAANAZAZAZNAANANNANANZNZNANZZZZZAAAZNNZNZNAANNZNNNZNAZAAAANZZANANZNZZZNZZZNNZNANNZZNZZAAZANNNZANZNAZZAZZANZAZZANNZZAZNNZANNZAZNANAAANNZZZNZAANANANZZAZZANNZAZANZZNAAAZNZANAAANZNAANAZZNANNZNAZNZZNZANAANZAZNZAANZZNNNZZANANZNAAAZAZ';
console.log(abbreviation(a, b));
a = 'evivevvVvevvEeeevVevevVvevEVevEeeEVVveevEvevevEeEeEEeeVevvvVVvevveevevEeVeVvvveeeeeivVveEevvEeveevvevvvVeevVeeeeveebveeVvvvvvEVEvEvvvvEEVVeeeVvEVEvevvevEvveVeEeeeVveVEVvvvvEeeVVvVeEEVvEEeeeveveeevVVeeeevVveeVvevVVevevvEEveVEEVVeeeEeveevevEvvvvevveeeeVEvevvEVvvvVevevvvveVeevVveevVeEevEEeeevVeieeeVvvvevvVeevvveeeevvVevEeevvvevveveevvveeeveeevVivevvevVvVeeevvEveevEEVeeVVEeeeevvveeEeveevvVeeEeevvvveeVvveveeeEveeeEeveeveVeVEveevvvVeevvveeEevVveeeVEeevEveevvVeveeeeVVVVeVEvvEVveveEvVeeeeEeeevvVEvveevvEeevevvVEeeeEvvvevvVvEVEvvvvvVvevEvVvVeevVevvVvEvveeeeeeEeveeVvEvVVvveveEvvVveeevvvViEeEEveeevvVevEveVVVeEeevVeveeEeeeeeveEvvVEeeEeveEvvvvveeVveVeVveeeVveEveeVvEVeEEeveeeVvvveEeveveeeVevevvveveVEEeveveevevveeevVeeeveveeveeveevvvEeeEvVeveevVEVEvvVVeeveVevViEEvVevevvVVEVVvvVeiEvVeevevvvEevvEvvvvevVveeVvvEevEeEEvEeeeeevveveevveveeeeVVeeveevvvveeVEEEveeeveeeEveeVVeeeVvEvvevveevvveVveeievivvVvvevevveeEeVEEeveveeVEEveviEveeivVvvVIEeEEvEveevEEveVvvEEveVeVEVvveveeVvVeEveeVVvveveeveVeveevvevEeVeeveVeEeVve';
b = 'VEVVEEVEVVEVEEVVVEVEEEEEEEVVVEVEVEVVEEVEEEVVVEEVEEVVVEVEEVEEVVVVEVEVEVVEEVEEEEVEVVEEEVVVEEEVEEEVVEEVVVVVVEVVVVVEEVEEVVEEEVEVVVVEVEVEVEVVVEVVEEVVVEEEEEEVVIEEVVVVEEVVVEVEVVVEVVVEVIVEVVVVEEEEEVVVEVEEEVEVEEVEVVVEVVVEEEEEEVEVEVEVVEVVVVVEVEVEVEEEEVVEVEEEEVVEEEEEVEVEVEVVVEEVVEVVVVEEEEEVEVVVVVEEEVEEVEEEEVEEVVVEEEVEEVEEEEEEEVVVEVVEEVEVEEEVVVVEVEEVEVEVVVEEVEVVEVVVEVEEEEVVEVEVVEEVVVEEVVVVEVVVVEVVVVVEVEVVVVEVEEEEEEVVVEVVEEVVVEEVEEEEEEEEVVEEVEVEVVEVEIVVEEVEEVVEEVEEEIVVVVIEEEEEVEEEVEEEVVEVVEVVEVVEVEVEVEVVVEVE';
console.log(abbreviation(a, b));
a = 'cCccCoccocOOCCOccoccoCooCocoOoCcoCoooooOcococccOoocCoccOcoCcoooocCoooocCwcooowcocoocOococoocooOooCCooccooCCocooccoCoococccCccocoOoCcOCocccocOoOooOOooooccOcococcOOooCccooCoccOccoCcoCccOcccOoCCococCooOCoocccocoOocoOCCcoccOcOcccoOooooOOOoOcCcocCoCoOCOOcOcOOocooooocoCccocooocoooocccccooccccCCcoocococCcccCOcccccOoooOoooCcocccooocoCccOCCCccooccOwcCoccCcCcccocooOocCocccoOccocooccOocccooocooccOcccocoocoOOCOocOoococooOoOcocoocOcCcococcocCcoCoCOoOcoOOccoCcOoococoCooocccCooccCCcccCOooocoCOoOCcCccccocwcoCCOOcOoOccccCcocoCCococcCooOCcocccocOcocoocooooCoccccooOccCocoOOocococooOcccCocoOoccoCoocOccOoOOooooooocCoocCCcccococoooocCcoOooooOCcOccCooooOoocccccocoOocoCccCCcwOoOcocoocoOocccoOoCccocoocccccccooowccccOcCCoocooocOooococOOoooccoOwooOCccccoooocCooooooooooCwcooCcccoOcCoooOoOcwOoCoCcCocwoOOCcoocOOcCooocOoOooOoOccOcccocCoOcOcocoococcOoooccccccCoCooCcoooocCccOCccCooCcoOCcocoocOcoocoooOocCcCcoocoCOoOoocooCococoOccCoCoooocOoooOcoooCccocoocococOcOCccccoocccccccCooOoowoOcooOcCCOoCccCocooccoccoCCoccocOcccCo';
b = 'CCCOOCCOCOCOCOOCCCOOCOCOCOCOCCCOOCOOCOOWCOOOOOOOOOOCCOOCCCCCOCOCOOCOCOOOOOOOOOOOCCOCOOCCCCCOCOOCCCCOCOCCOOOOCCCOCOOCOOOOOOOCCCCOOCOOCOOOOOOCCOOOOCCCCCCCCOCCCCOOOOOCOCOCCOCCCCOCOCCCCCCCOOCCOCCOCCOOOCOOOOCOOOOOOCCOOCCOOCOCCCCOOOOOOOCOCOCCCCCCOOOCCOOCCCCCCOOCOOCCCCCOOCCCOCCCOCOOCOCCOCCOOOOOOOOOCCOOOCCOCOOOOOOOOCCCCOCOOCCOOOCOCCOOOOCOOOCCCWOOOCCOOCCOCCOCCOOCOCCCOCOOOOOCOOOCCCCCOCOCOOCOOWOOCCCOOOCCOOOCCOOCOOOOOOCOCCCOOCCCOOCOCOCOCCCCOCCCCOCCOOOOOCCOCCOOOOCOOCCCOOOCOOOOCCCOCOCCCOCCOOOCCOOCCCOOCCOCOOCC';
console.log(abbreviation(a, b));


