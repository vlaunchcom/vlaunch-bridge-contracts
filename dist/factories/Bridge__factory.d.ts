import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Bridge, BridgeInterface } from "../Bridge";
export declare class Bridge__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_validatorPKX: BigNumberish, _validatorPKYP: BigNumberish, _outflowLimit: BigNumberish, _wToken: string, _vPAD: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Bridge>;
    getDeployTransaction(_validatorPKX: BigNumberish, _validatorPKYP: BigNumberish, _outflowLimit: BigNumberish, _wToken: string, _vPAD: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Bridge;
    connect(signer: Signer): Bridge__factory;
    static readonly bytecode = "0x60c0604052600060035560006004553480156200001b57600080fd5b506040516200381f3803806200381f83398181016040528101906200004191906200039d565b60008060006101000a81548160ff0219169083151502179055506200007b6200006f6200019460201b60201c565b6200019c60201b60201c565b6001807ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141901c620000ad919062000454565b8510620000f1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000e89062000512565b60405180910390fd5b8460018190555083600260006101000a81548160ff021916908360ff1602179055508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508260058190555042600681905550505050505062000534565b600033905090565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b6200027b8162000266565b81146200028757600080fd5b50565b6000815190506200029b8162000270565b92915050565b600060ff82169050919050565b620002b981620002a1565b8114620002c557600080fd5b50565b600081519050620002d981620002ae565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030c82620002df565b9050919050565b60006200032082620002ff565b9050919050565b620003328162000313565b81146200033e57600080fd5b50565b600081519050620003528162000327565b92915050565b60006200036582620002ff565b9050919050565b620003778162000358565b81146200038357600080fd5b50565b60008151905062000397816200036c565b92915050565b600080600080600060a08688031215620003bc57620003bb62000261565b5b6000620003cc888289016200028a565b9550506020620003df88828901620002c8565b9450506040620003f2888289016200028a565b9350506060620004058882890162000341565b9250506080620004188882890162000386565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620004618262000266565b91506200046e8362000266565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004a657620004a562000425565b5b828201905092915050565b600082825260208201905092915050565b7f5075626c6963204b6579206d757374206265203c2048414c465f512100000000600082015250565b6000620004fa601c83620004b1565b91506200050782620004c2565b602082019050919050565b600060208201905081810360008301526200052d81620004eb565b9050919050565b60805160a05161329b6200058460003960008181610d96015281816111590152818161124e01526113da01526000818161054c015281816106c5015281816107ba0152610d01015261329b6000f3fe6080604052600436106101665760003560e01c806377ef33a2116100d1578063c62524831161008a578063de1ab9a011610064578063de1ab9a014610488578063e493ef8c146104b3578063f2fde38b146104de578063ff51dff21461050757610166565b8063c625248314610418578063db1ba4ec14610434578063db9979f91461045d57610166565b806377ef33a2146103405780637dd0480f1461036b5780638da5cb5b146103825780638efb3bb2146103ad5780639dcae735146103d8578063a82f143c1461040157610166565b80634153071b116101235780634153071b1461025a57806344927284146102835780634d97f59a146102ac5780635c975abb146102d5578063715018a614610300578063717d60671461031757610166565b806302ea11721461016b5780630babd8641461019657806312fd8885146101c1578063133ec30a146101ea57806316b47ef7146102065780631d558a8414610231575b600080fd5b34801561017757600080fd5b50610180610544565b60405161018d9190611e5e565b60405180910390f35b3480156101a257600080fd5b506101ab61054a565b6040516101b89190611ef8565b60405180910390f35b3480156101cd57600080fd5b506101e860048036038101906101e39190611f82565b61056e565b005b61020460048036038101906101ff9190611fd5565b610620565b005b34801561021257600080fd5b5061021b610849565b6040516102289190612031565b60405180910390f35b34801561023d57600080fd5b506102586004803603810190610253919061204c565b61085c565b005b34801561026657600080fd5b50610281600480360381019061027c91906120b8565b6109fa565b005b34801561028f57600080fd5b506102aa60048036038101906102a59190611f82565b610a88565b005b3480156102b857600080fd5b506102d360048036038101906102ce9190612133565b610b49565b005b3480156102e157600080fd5b506102ea610bb8565b6040516102f791906121b5565b60405180910390f35b34801561030c57600080fd5b50610315610bce565b005b34801561032357600080fd5b5061033e600480360381019061033991906121d0565b610c56565b005b34801561034c57600080fd5b50610355610d94565b604051610362919061226c565b60405180910390f35b34801561037757600080fd5b50610380610db8565b005b34801561038e57600080fd5b50610397610e86565b6040516103a49190612296565b60405180910390f35b3480156103b957600080fd5b506103c2610eaf565b6040516103cf9190611e5e565b60405180910390f35b3480156103e457600080fd5b506103ff60048036038101906103fa91906122b1565b610ee2565b005b34801561040d57600080fd5b50610416610fe7565b005b610432600480360381019061042d9190611fd5565b6110b4565b005b34801561044057600080fd5b5061045b600480360381019061045691906121d0565b61132f565b005b34801561046957600080fd5b506104726114bd565b60405161047f9190611e5e565b60405180910390f35b34801561049457600080fd5b5061049d6114c3565b6040516104aa9190611e5e565b60405180910390f35b3480156104bf57600080fd5b506104c86114c9565b6040516104d59190611e5e565b60405180910390f35b3480156104ea57600080fd5b50610505600480360381019061050091906122de565b6114ed565b005b34801561051357600080fd5b5061052e6004803603810190610529919061230b565b6115e5565b60405161053b91906121b5565b60405180910390f35b60045481565b7f000000000000000000000000000000000000000000000000000000000000000081565b610576610bb8565b6105b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ac906123e3565b60405180910390fd5b60004630856040516020016105cc93929190612403565b6040516020818303038152906040526040516020016105eb919061250b565b6040516020818303038152906040528051906020012060001c9050610612848484846118bb565b61061a611959565b50505050565b60003411610663576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065a90612579565b60405180910390fd5b61066b610bb8565b156106ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a2906125e5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16141561073b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073290612677565b60405180910390fd5b7f4e799a84009a97716a66c8563faf0cc147bae8f242e613347dc77d3844e26d1b60035482343386604051610774959493929190612697565b60405180910390a1610785826119fa565b6001600360008282546107989190612719565b9250508190555034600460008282546107b19190612719565b925050819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639dc29fac33846040518363ffffffff1660e01b815260040161081392919061276f565b600060405180830381600087803b15801561082d57600080fd5b505af1158015610841573d6000803e3d6000fd5b505050505050565b600260009054906101000a900460ff1681565b610864610bb8565b156108a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089b906125e5565b60405180910390fd5b6108ac611bbe565b73ffffffffffffffffffffffffffffffffffffffff166108ca610e86565b73ffffffffffffffffffffffffffffffffffffffff1614610920576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610917906127e4565b60405180910390fd5b80600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000610e10426109749190612719565b905080600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f994733fec7a6ad7797695d8a7763625f6fe8c84b030d64d28473cfc31455c9f58383836040516109ed93929190612804565b60405180910390a1505050565b60004630878787604051602001610a1595949392919061283b565b604051602081830303815290604052604051602001610a3491906128da565b6040516020818303038152906040528051906020012060001c9050610a5b868484846118bb565b8460ff1660018190555083600260006101000a81548160ff021916908360ff160217905550505050505050565b6000463085604051602001610a9f93929190612403565b604051602081830303815290604052604051602001610abe9190612948565b6040516020818303038152906040528051906020012060001c9050610ae5848484846118bb565b600060045490506000600481905550610afc610e86565b73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610b41573d6000803e3d6000fd5b505050505050565b600046308686604051602001610b62949392919061296a565b604051602081830303815290604052604051602001610b8191906129fb565b6040516020818303038152906040528051906020012060001c9050610ba8858484846118bb565b610bb184611bc6565b5050505050565b60008060009054906101000a900460ff16905090565b610bd6611bbe565b73ffffffffffffffffffffffffffffffffffffffff16610bf4610e86565b73ffffffffffffffffffffffffffffffffffffffff1614610c4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c41906127e4565b60405180910390fd5b610c546000611bc6565b565b610c5e610bb8565b15610c9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c95906125e5565b60405180910390fd5b60004630878787604051602001610cb9959493929190612a1d565b604051602081830303815290604052604051602001610cd89190612abc565b6040516020818303038152906040528051906020012060001c9050610cff86848484611c8b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166340c10f1986866040518363ffffffff1660e01b8152600401610d5a92919061276f565b600060405180830381600087803b158015610d7457600080fd5b505af1158015610d88573d6000803e3d6000fd5b50505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610dc0610bb8565b15610e00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df7906125e5565b60405180910390fd5b610e08611bbe565b73ffffffffffffffffffffffffffffffffffffffff16610e26610e86565b73ffffffffffffffffffffffffffffffffffffffff1614610e7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e73906127e4565b60405180910390fd5b610e84611d29565b565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6001807ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141901c610edf9190612719565b81565b610eea610bb8565b15610f2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f21906125e5565b60405180910390fd5b610f32611bbe565b73ffffffffffffffffffffffffffffffffffffffff16610f50610e86565b73ffffffffffffffffffffffffffffffffffffffff1614610fa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9d906127e4565b60405180910390fd5b806005819055507f8ecf7880f391ecbf845f8ade550f8a2dcc51f33f2b3b3ef0ce9b6453deba836981604051610fdc9190611e5e565b60405180910390a150565b610fef610bb8565b61102e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611025906123e3565b60405180910390fd5b611036611bbe565b73ffffffffffffffffffffffffffffffffffffffff16611054610e86565b73ffffffffffffffffffffffffffffffffffffffff16146110aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a1906127e4565b60405180910390fd5b6110b2611959565b565b600034116110f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ee90612579565b60405180910390fd5b6110ff610bb8565b1561113f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611136906125e5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614156111cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c690612b50565b60405180910390fd5b7f885b5b75ce2712ee7da7819df23da1924fcabcd5244ae08e2f6dc4f9742908d960035482343386604051611208959493929190612697565b60405180910390a1611219826119fa565b60016003600082825461122c9190612719565b9250508190555034600460008282546112459190612719565b925050819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016112a993929190612b70565b6020604051808303816000875af11580156112c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ec9190612bd3565b61132b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132290612c4c565b60405180910390fd5b5050565b611337610bb8565b15611377576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136e906125e5565b60405180910390fd5b60004630878787604051602001611392959493929190612a1d565b6040516020818303038152906040526040516020016113b19190612cb8565b6040516020818303038152906040528051906020012060001c90506113d886848484611c8b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86866040518363ffffffff1660e01b815260040161143392919061276f565b6020604051808303816000875af1158015611452573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114769190612bd3565b6114b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114ac90612d26565b60405180910390fd5b505050505050565b60055481565b60015481565b7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414181565b6114f5611bbe565b73ffffffffffffffffffffffffffffffffffffffff16611513610e86565b73ffffffffffffffffffffffffffffffffffffffff1614611569576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611560906127e4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156115d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d090612db8565b60405180910390fd5b6115e281611bc6565b50565b60006001807ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141901c6116179190612719565b8610611658576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164f90612e24565b60405180910390fd5b7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414184106116ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b190612eb6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580156116f75750600086115b80156117035750600084115b801561170f5750600083115b61174e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174590612f22565b60405180910390fd5b6000868685856040516020016117679493929190612fe1565b6040516020818303038152906040528051906020012060001c9050600060017ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141806117b5576117b461302f565b5b878a097ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641416117e3919061305e565b60001b60008960ff16146117f857601c6117fb565b601b5b8a60001b7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641418061182e5761182d61302f565b5b8c870960001b6040516000815260200160405260405161185194939291906130ab565b6020604051602081039080840390855afa158015611873573d6000803e3d6000fd5b5050506020604051035190508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16149250505095945050505050565b6009600085815260200190815260200160002060009054906101000a900460ff161561191c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119139061313c565b60405180910390fd5b60016009600086815260200190815260200160002060006101000a81548160ff021916908315150217905550611953838383611dcb565b50505050565b611961610bb8565b6119a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611997906123e3565b60405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6119e3611bbe565b6040516119f09190612296565b60405180910390a1565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905042811115611b305781600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a95919061305e565b925050819055506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415611b2a576000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b50611bbb565b611b3b600654611e2d565b611b4442611e2d565b1115611b535760006007819055505b8160076000828254611b659190612719565b925050819055504260068190555060055460075410611bb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bb0906131a8565b60405180910390fd5b505b50565b600033905090565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6008600085815260200190815260200160002060009054906101000a900460ff1615611cec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce39061313c565b60405180910390fd5b60016008600086815260200190815260200160002060006101000a81548160ff021916908315150217905550611d23838383611dcb565b50505050565b611d31610bb8565b15611d71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d68906125e5565b60405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611db4611bbe565b604051611dc19190612296565b60405180910390a1565b611de9600154600260009054906101000a900460ff168584866115e5565b611e28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e1f90613214565b60405180910390fd5b505050565b60006201518082611e3e9190613234565b9050919050565b6000819050919050565b611e5881611e45565b82525050565b6000602082019050611e736000830184611e4f565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611ebe611eb9611eb484611e79565b611e99565b611e79565b9050919050565b6000611ed082611ea3565b9050919050565b6000611ee282611ec5565b9050919050565b611ef281611ed7565b82525050565b6000602082019050611f0d6000830184611ee9565b92915050565b600080fd5b611f2181611e45565b8114611f2c57600080fd5b50565b600081359050611f3e81611f18565b92915050565b6000611f4f82611e79565b9050919050565b611f5f81611f44565b8114611f6a57600080fd5b50565b600081359050611f7c81611f56565b92915050565b600080600060608486031215611f9b57611f9a611f13565b5b6000611fa986828701611f2f565b9350506020611fba86828701611f2f565b9250506040611fcb86828701611f6d565b9150509250925092565b60008060408385031215611fec57611feb611f13565b5b6000611ffa85828601611f2f565b925050602061200b85828601611f2f565b9150509250929050565b600060ff82169050919050565b61202b81612015565b82525050565b60006020820190506120466000830184612022565b92915050565b6000806040838503121561206357612062611f13565b5b600061207185828601611f6d565b925050602061208285828601611f2f565b9150509250929050565b61209581612015565b81146120a057600080fd5b50565b6000813590506120b28161208c565b92915050565b600080600080600060a086880312156120d4576120d3611f13565b5b60006120e288828901611f2f565b95505060206120f3888289016120a3565b9450506040612104888289016120a3565b935050606061211588828901611f2f565b925050608061212688828901611f6d565b9150509295509295909350565b6000806000806080858703121561214d5761214c611f13565b5b600061215b87828801611f2f565b945050602061216c87828801611f6d565b935050604061217d87828801611f2f565b925050606061218e87828801611f6d565b91505092959194509250565b60008115159050919050565b6121af8161219a565b82525050565b60006020820190506121ca60008301846121a6565b92915050565b600080600080600060a086880312156121ec576121eb611f13565b5b60006121fa88828901611f2f565b955050602061220b88828901611f6d565b945050604061221c88828901611f2f565b935050606061222d88828901611f2f565b925050608061223e88828901611f6d565b9150509295509295909350565b600061225682611ec5565b9050919050565b6122668161224b565b82525050565b6000602082019050612281600083018461225d565b92915050565b61229081611f44565b82525050565b60006020820190506122ab6000830184612287565b92915050565b6000602082840312156122c7576122c6611f13565b5b60006122d584828501611f2f565b91505092915050565b6000602082840312156122f4576122f3611f13565b5b600061230284828501611f6d565b91505092915050565b600080600080600060a0868803121561232757612326611f13565b5b600061233588828901611f2f565b9550506020612346888289016120a3565b945050604061235788828901611f2f565b935050606061236888828901611f2f565b925050608061237988828901611f6d565b9150509295509295909350565b600082825260208201905092915050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b60006123cd601483612386565b91506123d882612397565b602082019050919050565b600060208201905081810360008301526123fc816123c0565b9050919050565b60006060820190506124186000830186611e4f565b6124256020830185612287565b6124326040830184611e4f565b949350505050565b600081905092915050565b7f556e7061757365416374696f6e00000000000000000000000000000000000000600082015250565b600061247b600d8361243a565b915061248682612445565b600d82019050919050565b600081519050919050565b600081905092915050565b60005b838110156124c55780820151818401526020810190506124aa565b838111156124d4576000848401525b50505050565b60006124e582612491565b6124ef818561249c565b93506124ff8185602086016124a7565b80840191505092915050565b60006125168261246e565b915061252282846124da565b915081905092915050565b7f5478204665657320697320726571756972656421000000000000000000000000600082015250565b6000612563601483612386565b915061256e8261252d565b602082019050919050565b6000602082019050818103600083015261259281612556565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b60006125cf601083612386565b91506125da82612599565b602082019050919050565b600060208201905081810360008301526125fe816125c2565b9050919050565b7f63616e27742063616c6c2073656e64577261707065642066726f6d204e61746960008201527f766520436861696e000000000000000000000000000000000000000000000000602082015250565b6000612661602883612386565b915061266c82612605565b604082019050919050565b6000602082019050818103600083015261269081612654565b9050919050565b600060a0820190506126ac6000830188611e4f565b6126b96020830187611e4f565b6126c66040830186611e4f565b6126d36060830185612287565b6126e06080830184611e4f565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061272482611e45565b915061272f83611e45565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612764576127636126ea565b5b828201905092915050565b60006040820190506127846000830185612287565b6127916020830184611e4f565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006127ce602083612386565b91506127d982612798565b602082019050919050565b600060208201905081810360008301526127fd816127c1565b9050919050565b60006060820190506128196000830186612287565b6128266020830185611e4f565b6128336040830184611e4f565b949350505050565b600060a0820190506128506000830188611e4f565b61285d6020830187612287565b61286a6040830186611e4f565b6128776060830185612022565b6128846080830184612022565b9695505050505050565b7f55706461746547726f75704b6579416374696f6e000000000000000000000000600082015250565b60006128c460148361243a565b91506128cf8261288e565b601482019050919050565b60006128e5826128b7565b91506128f182846124da565b915081905092915050565b7f5769746864726177416374696f6e000000000000000000000000000000000000600082015250565b6000612932600e8361243a565b915061293d826128fc565b600e82019050919050565b600061295382612925565b915061295f82846124da565b915081905092915050565b600060808201905061297f6000830187611e4f565b61298c6020830186612287565b6129996040830185611e4f565b6129a66060830184612287565b95945050505050565b7f5570646174654f776e6572416374696f6e000000000000000000000000000000600082015250565b60006129e560118361243a565b91506129f0826129af565b601182019050919050565b6000612a06826129d8565b9150612a1282846124da565b915081905092915050565b600060a082019050612a326000830188611e4f565b612a3f6020830187612287565b612a4c6040830186611e4f565b612a596060830185612287565b612a666080830184611e4f565b9695505050505050565b7f5472616e73666572416374696f6e000000000000000000000000000000000000600082015250565b6000612aa6600e8361243a565b9150612ab182612a70565b600e82019050919050565b6000612ac782612a99565b9150612ad382846124da565b915081905092915050565b7f63616e27742063616c6c2073656e644e61746976652066726f6d20577261707060008201527f656420436861696e000000000000000000000000000000000000000000000000602082015250565b6000612b3a602883612386565b9150612b4582612ade565b604082019050919050565b60006020820190508181036000830152612b6981612b2d565b9050919050565b6000606082019050612b856000830186612287565b612b926020830185612287565b612b9f6040830184611e4f565b949350505050565b612bb08161219a565b8114612bbb57600080fd5b50565b600081519050612bcd81612ba7565b92915050565b600060208284031215612be957612be8611f13565b5b6000612bf784828501612bbe565b91505092915050565b7f6661696c656420746f207472616e7366657220746f6b656e7300000000000000600082015250565b6000612c36601983612386565b9150612c4182612c00565b602082019050919050565b60006020820190508181036000830152612c6581612c29565b9050919050565b7f556e667265657a65416374696f6e000000000000000000000000000000000000600082015250565b6000612ca2600e8361243a565b9150612cad82612c6c565b600e82019050919050565b6000612cc382612c95565b9150612ccf82846124da565b915081905092915050565b7f6661696c656420746f207472616e736665723f21000000000000000000000000600082015250565b6000612d10601483612386565b9150612d1b82612cda565b602082019050919050565b60006020820190508181036000830152612d3f81612d03565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612da2602683612386565b9150612dad82612d46565b604082019050919050565b60006020820190508181036000830152612dd181612d95565b9050919050565b7f5075626c69632d6b65792078203e3d2048414c465f5100000000000000000000600082015250565b6000612e0e601683612386565b9150612e1982612dd8565b602082019050919050565b60006020820190508181036000830152612e3d81612e01565b9050919050565b7f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f60008201527f2051000000000000000000000000000000000000000000000000000000000000602082015250565b6000612ea0602283612386565b9150612eab82612e44565b604082019050919050565b60006020820190508181036000830152612ecf81612e93565b9050919050565b7f6e6f207a65726f20696e7075747320616c6c6f77656400000000000000000000600082015250565b6000612f0c601683612386565b9150612f1782612ed6565b602082019050919050565b60006020820190508181036000830152612f3b81612eff565b9050919050565b6000819050919050565b612f5d612f5882611e45565b612f42565b82525050565b60008160f81b9050919050565b6000612f7b82612f63565b9050919050565b612f93612f8e82612015565b612f70565b82525050565b60008160601b9050919050565b6000612fb182612f99565b9050919050565b6000612fc382612fa6565b9050919050565b612fdb612fd682611f44565b612fb8565b82525050565b6000612fed8287612f4c565b602082019150612ffd8286612f82565b60018201915061300d8285612f4c565b60208201915061301d8284612fca565b60148201915081905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061306982611e45565b915061307483611e45565b925082821015613087576130866126ea565b5b828203905092915050565b6000819050919050565b6130a581613092565b82525050565b60006080820190506130c0600083018761309c565b6130cd6020830186612022565b6130da604083018561309c565b6130e7606083018461309c565b95945050505050565b7f6475706c696361746520616374696f6e21000000000000000000000000000000600082015250565b6000613126601183612386565b9150613131826130f0565b602082019050919050565b6000602082019050818103600083015261315581613119565b9050919050565b7f6461696c79206f7574666c6f77206c696d697420686974000000000000000000600082015250565b6000613192601783612386565b915061319d8261315c565b602082019050919050565b600060208201905081810360008301526131c181613185565b9050919050565b7f6661696c656420746f20766572696679207369676e6174757265210000000000600082015250565b60006131fe601b83612386565b9150613209826131c8565b602082019050919050565b6000602082019050818103600083015261322d816131f1565b9050919050565b600061323f82611e45565b915061324a83611e45565b92508261325a5761325961302f565b5b82820490509291505056fea26469706673582212205b40d9f6faedc3a59b010145735ab918b02c0883e8ba2be62e9da25a6a69444364736f6c634300080b0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): BridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Bridge;
}
