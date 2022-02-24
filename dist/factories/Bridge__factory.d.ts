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
    static readonly bytecode = "0x60c0604052600060035560006004553480156200001b57600080fd5b506040516200381c3803806200381c83398181016040528101906200004191906200039d565b60008060006101000a81548160ff0219169083151502179055506200007b6200006f6200019460201b60201c565b6200019c60201b60201c565b6001807ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141901c620000ad919062000454565b8510620000f1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000e89062000512565b60405180910390fd5b8460018190555083600260006101000a81548160ff021916908360ff1602179055508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508260058190555042600681905550505050505062000534565b600033905090565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b6200027b8162000266565b81146200028757600080fd5b50565b6000815190506200029b8162000270565b92915050565b600060ff82169050919050565b620002b981620002a1565b8114620002c557600080fd5b50565b600081519050620002d981620002ae565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030c82620002df565b9050919050565b60006200032082620002ff565b9050919050565b620003328162000313565b81146200033e57600080fd5b50565b600081519050620003528162000327565b92915050565b60006200036582620002ff565b9050919050565b620003778162000358565b81146200038357600080fd5b50565b60008151905062000397816200036c565b92915050565b600080600080600060a08688031215620003bc57620003bb62000261565b5b6000620003cc888289016200028a565b9550506020620003df88828901620002c8565b9450506040620003f2888289016200028a565b9350506060620004058882890162000341565b9250506080620004188882890162000386565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620004618262000266565b91506200046e8362000266565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004a657620004a562000425565b5b828201905092915050565b600082825260208201905092915050565b7f5075626c6963204b6579206d757374206265203c2048414c465f512100000000600082015250565b6000620004fa601c83620004b1565b91506200050782620004c2565b602082019050919050565b600060208201905081810360008301526200052d81620004eb565b9050919050565b60805160a0516132986200058460003960008181610d08015281816110cb015281816111c001526113d701526000818161054c015281816106c5015281816107ba0152610c7301526132986000f3fe6080604052600436106101665760003560e01c80637dd0480f116100d1578063d9d86def1161008a578063de1ab9a011610064578063de1ab9a014610488578063e493ef8c146104b3578063f2fde38b146104de578063ff51dff21461050757610166565b8063d9d86def1461040b578063db1ba4ec14610434578063db9979f91461045d57610166565b80637dd0480f146103425780638da5cb5b146103595780638efb3bb2146103845780639dcae735146103af578063a82f143c146103d8578063c6252483146103ef57610166565b80634492728411610123578063449272841461025a5780634d97f59a146102835780635c975abb146102ac578063715018a6146102d7578063717d6067146102ee57806377ef33a21461031757610166565b806302ea11721461016b5780630babd8641461019657806312fd8885146101c1578063133ec30a146101ea57806316b47ef7146102065780631d558a8414610231575b600080fd5b34801561017757600080fd5b50610180610544565b60405161018d9190611e5b565b60405180910390f35b3480156101a257600080fd5b506101ab61054a565b6040516101b89190611ef5565b60405180910390f35b3480156101cd57600080fd5b506101e860048036038101906101e39190611f7f565b61056e565b005b61020460048036038101906101ff9190611fd2565b610620565b005b34801561021257600080fd5b5061021b610849565b604051610228919061202e565b60405180910390f35b34801561023d57600080fd5b5061025860048036038101906102539190612049565b61085c565b005b34801561026657600080fd5b50610281600480360381019061027c9190611f7f565b6109fa565b005b34801561028f57600080fd5b506102aa60048036038101906102a59190612089565b610abb565b005b3480156102b857600080fd5b506102c1610b2a565b6040516102ce919061210b565b60405180910390f35b3480156102e357600080fd5b506102ec610b40565b005b3480156102fa57600080fd5b5061031560048036038101906103109190612126565b610bc8565b005b34801561032357600080fd5b5061032c610d06565b60405161033991906121c2565b60405180910390f35b34801561034e57600080fd5b50610357610d2a565b005b34801561036557600080fd5b5061036e610df8565b60405161037b91906121ec565b60405180910390f35b34801561039057600080fd5b50610399610e21565b6040516103a69190611e5b565b60405180910390f35b3480156103bb57600080fd5b506103d660048036038101906103d19190612207565b610e54565b005b3480156103e457600080fd5b506103ed610f59565b005b61040960048036038101906104049190611fd2565b611026565b005b34801561041757600080fd5b50610432600480360381019061042d9190612260565b6112a1565b005b34801561044057600080fd5b5061045b60048036038101906104569190612126565b61132c565b005b34801561046957600080fd5b506104726114ba565b60405161047f9190611e5b565b60405180910390f35b34801561049457600080fd5b5061049d6114c0565b6040516104aa9190611e5b565b60405180910390f35b3480156104bf57600080fd5b506104c86114c6565b6040516104d59190611e5b565b60405180910390f35b3480156104ea57600080fd5b50610505600480360381019061050091906122db565b6114ea565b005b34801561051357600080fd5b5061052e60048036038101906105299190612308565b6115e2565b60405161053b919061210b565b60405180910390f35b60045481565b7f000000000000000000000000000000000000000000000000000000000000000081565b610576610b2a565b6105b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ac906123e0565b60405180910390fd5b60004630856040516020016105cc93929190612400565b6040516020818303038152906040526040516020016105eb9190612508565b6040516020818303038152906040528051906020012060001c9050610612848484846118b8565b61061a611956565b50505050565b60003411610663576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065a90612576565b60405180910390fd5b61066b610b2a565b156106ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a2906125e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16141561073b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073290612674565b60405180910390fd5b7f4e799a84009a97716a66c8563faf0cc147bae8f242e613347dc77d3844e26d1b60035482343386604051610774959493929190612694565b60405180910390a1610785826119f7565b6001600360008282546107989190612716565b9250508190555034600460008282546107b19190612716565b925050819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639dc29fac33846040518363ffffffff1660e01b815260040161081392919061276c565b600060405180830381600087803b15801561082d57600080fd5b505af1158015610841573d6000803e3d6000fd5b505050505050565b600260009054906101000a900460ff1681565b610864610b2a565b156108a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089b906125e2565b60405180910390fd5b6108ac611bbb565b73ffffffffffffffffffffffffffffffffffffffff166108ca610df8565b73ffffffffffffffffffffffffffffffffffffffff1614610920576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610917906127e1565b60405180910390fd5b80600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000610e10426109749190612716565b905080600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f994733fec7a6ad7797695d8a7763625f6fe8c84b030d64d28473cfc31455c9f58383836040516109ed93929190612801565b60405180910390a1505050565b6000463085604051602001610a1193929190612400565b604051602081830303815290604052604051602001610a309190612884565b6040516020818303038152906040528051906020012060001c9050610a57848484846118b8565b600060045490506000600481905550610a6e610df8565b73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610ab3573d6000803e3d6000fd5b505050505050565b600046308686604051602001610ad494939291906128a6565b604051602081830303815290604052604051602001610af39190612937565b6040516020818303038152906040528051906020012060001c9050610b1a858484846118b8565b610b2384611bc3565b5050505050565b60008060009054906101000a900460ff16905090565b610b48611bbb565b73ffffffffffffffffffffffffffffffffffffffff16610b66610df8565b73ffffffffffffffffffffffffffffffffffffffff1614610bbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb3906127e1565b60405180910390fd5b610bc66000611bc3565b565b610bd0610b2a565b15610c10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c07906125e2565b60405180910390fd5b60004630878787604051602001610c2b959493929190612959565b604051602081830303815290604052604051602001610c4a91906129f8565b6040516020818303038152906040528051906020012060001c9050610c7186848484611c88565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166340c10f1986866040518363ffffffff1660e01b8152600401610ccc92919061276c565b600060405180830381600087803b158015610ce657600080fd5b505af1158015610cfa573d6000803e3d6000fd5b50505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610d32610b2a565b15610d72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d69906125e2565b60405180910390fd5b610d7a611bbb565b73ffffffffffffffffffffffffffffffffffffffff16610d98610df8565b73ffffffffffffffffffffffffffffffffffffffff1614610dee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de5906127e1565b60405180910390fd5b610df6611d26565b565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6001807ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141901c610e519190612716565b81565b610e5c610b2a565b15610e9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e93906125e2565b60405180910390fd5b610ea4611bbb565b73ffffffffffffffffffffffffffffffffffffffff16610ec2610df8565b73ffffffffffffffffffffffffffffffffffffffff1614610f18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0f906127e1565b60405180910390fd5b806005819055507f8ecf7880f391ecbf845f8ade550f8a2dcc51f33f2b3b3ef0ce9b6453deba836981604051610f4e9190611e5b565b60405180910390a150565b610f61610b2a565b610fa0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f97906123e0565b60405180910390fd5b610fa8611bbb565b73ffffffffffffffffffffffffffffffffffffffff16610fc6610df8565b73ffffffffffffffffffffffffffffffffffffffff161461101c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611013906127e1565b60405180910390fd5b611024611956565b565b60003411611069576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106090612576565b60405180910390fd5b611071610b2a565b156110b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a8906125e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161415611141576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113890612a8c565b60405180910390fd5b7f885b5b75ce2712ee7da7819df23da1924fcabcd5244ae08e2f6dc4f9742908d96003548234338660405161117a959493929190612694565b60405180910390a161118b826119f7565b60016003600082825461119e9190612716565b9250508190555034600460008282546111b79190612716565b925050819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161121b93929190612aac565b6020604051808303816000875af115801561123a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125e9190612b0f565b61129d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129490612b88565b60405180910390fd5b5050565b600046308787876040516020016112bc959493929190612ba8565b6040516020818303038152906040526040516020016112db9190612c47565b6040516020818303038152906040528051906020012060001c9050611302868484846118b8565b8460018190555083600260006101000a81548160ff021916908360ff160217905550505050505050565b611334610b2a565b15611374576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136b906125e2565b60405180910390fd5b6000463087878760405160200161138f959493929190612959565b6040516020818303038152906040526040516020016113ae9190612cb5565b6040516020818303038152906040528051906020012060001c90506113d586848484611c88565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86866040518363ffffffff1660e01b815260040161143092919061276c565b6020604051808303816000875af115801561144f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114739190612b0f565b6114b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114a990612d23565b60405180910390fd5b505050505050565b60055481565b60015481565b7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414181565b6114f2611bbb565b73ffffffffffffffffffffffffffffffffffffffff16611510610df8565b73ffffffffffffffffffffffffffffffffffffffff1614611566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155d906127e1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156115d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115cd90612db5565b60405180910390fd5b6115df81611bc3565b50565b60006001807ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141901c6116149190612716565b8610611655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164c90612e21565b60405180910390fd5b7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414184106116b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ae90612eb3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580156116f45750600086115b80156117005750600084115b801561170c5750600083115b61174b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174290612f1f565b60405180910390fd5b6000868685856040516020016117649493929190612fde565b6040516020818303038152906040528051906020012060001c9050600060017ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141806117b2576117b161302c565b5b878a097ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641416117e0919061305b565b60001b60008960ff16146117f557601c6117f8565b601b5b8a60001b7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641418061182b5761182a61302c565b5b8c870960001b6040516000815260200160405260405161184e94939291906130a8565b6020604051602081039080840390855afa158015611870573d6000803e3d6000fd5b5050506020604051035190508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16149250505095945050505050565b6009600085815260200190815260200160002060009054906101000a900460ff1615611919576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161191090613139565b60405180910390fd5b60016009600086815260200190815260200160002060006101000a81548160ff021916908315150217905550611950838383611dc8565b50505050565b61195e610b2a565b61199d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611994906123e0565b60405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6119e0611bbb565b6040516119ed91906121ec565b60405180910390a1565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905042811115611b2d5781600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a92919061305b565b925050819055506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415611b27576000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b50611bb8565b611b38600654611e2a565b611b4142611e2a565b1115611b505760006007819055505b8160076000828254611b629190612716565b925050819055504260068190555060055460075410611bb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bad906131a5565b60405180910390fd5b505b50565b600033905090565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6008600085815260200190815260200160002060009054906101000a900460ff1615611ce9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce090613139565b60405180910390fd5b60016008600086815260200190815260200160002060006101000a81548160ff021916908315150217905550611d20838383611dc8565b50505050565b611d2e610b2a565b15611d6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d65906125e2565b60405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611db1611bbb565b604051611dbe91906121ec565b60405180910390a1565b611de6600154600260009054906101000a900460ff168584866115e2565b611e25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e1c90613211565b60405180910390fd5b505050565b60006201518082611e3b9190613231565b9050919050565b6000819050919050565b611e5581611e42565b82525050565b6000602082019050611e706000830184611e4c565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611ebb611eb6611eb184611e76565b611e96565b611e76565b9050919050565b6000611ecd82611ea0565b9050919050565b6000611edf82611ec2565b9050919050565b611eef81611ed4565b82525050565b6000602082019050611f0a6000830184611ee6565b92915050565b600080fd5b611f1e81611e42565b8114611f2957600080fd5b50565b600081359050611f3b81611f15565b92915050565b6000611f4c82611e76565b9050919050565b611f5c81611f41565b8114611f6757600080fd5b50565b600081359050611f7981611f53565b92915050565b600080600060608486031215611f9857611f97611f10565b5b6000611fa686828701611f2c565b9350506020611fb786828701611f2c565b9250506040611fc886828701611f6a565b9150509250925092565b60008060408385031215611fe957611fe8611f10565b5b6000611ff785828601611f2c565b925050602061200885828601611f2c565b9150509250929050565b600060ff82169050919050565b61202881612012565b82525050565b6000602082019050612043600083018461201f565b92915050565b600080604083850312156120605761205f611f10565b5b600061206e85828601611f6a565b925050602061207f85828601611f2c565b9150509250929050565b600080600080608085870312156120a3576120a2611f10565b5b60006120b187828801611f2c565b94505060206120c287828801611f6a565b93505060406120d387828801611f2c565b92505060606120e487828801611f6a565b91505092959194509250565b60008115159050919050565b612105816120f0565b82525050565b600060208201905061212060008301846120fc565b92915050565b600080600080600060a0868803121561214257612141611f10565b5b600061215088828901611f2c565b955050602061216188828901611f6a565b945050604061217288828901611f2c565b935050606061218388828901611f2c565b925050608061219488828901611f6a565b9150509295509295909350565b60006121ac82611ec2565b9050919050565b6121bc816121a1565b82525050565b60006020820190506121d760008301846121b3565b92915050565b6121e681611f41565b82525050565b600060208201905061220160008301846121dd565b92915050565b60006020828403121561221d5761221c611f10565b5b600061222b84828501611f2c565b91505092915050565b61223d81612012565b811461224857600080fd5b50565b60008135905061225a81612234565b92915050565b600080600080600060a0868803121561227c5761227b611f10565b5b600061228a88828901611f2c565b955050602061229b88828901611f2c565b94505060406122ac8882890161224b565b93505060606122bd88828901611f2c565b92505060806122ce88828901611f6a565b9150509295509295909350565b6000602082840312156122f1576122f0611f10565b5b60006122ff84828501611f6a565b91505092915050565b600080600080600060a0868803121561232457612323611f10565b5b600061233288828901611f2c565b95505060206123438882890161224b565b945050604061235488828901611f2c565b935050606061236588828901611f2c565b925050608061237688828901611f6a565b9150509295509295909350565b600082825260208201905092915050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b60006123ca601483612383565b91506123d582612394565b602082019050919050565b600060208201905081810360008301526123f9816123bd565b9050919050565b60006060820190506124156000830186611e4c565b61242260208301856121dd565b61242f6040830184611e4c565b949350505050565b600081905092915050565b7f556e7061757365416374696f6e00000000000000000000000000000000000000600082015250565b6000612478600d83612437565b915061248382612442565b600d82019050919050565b600081519050919050565b600081905092915050565b60005b838110156124c25780820151818401526020810190506124a7565b838111156124d1576000848401525b50505050565b60006124e28261248e565b6124ec8185612499565b93506124fc8185602086016124a4565b80840191505092915050565b60006125138261246b565b915061251f82846124d7565b915081905092915050565b7f5478204665657320697320726571756972656421000000000000000000000000600082015250565b6000612560601483612383565b915061256b8261252a565b602082019050919050565b6000602082019050818103600083015261258f81612553565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b60006125cc601083612383565b91506125d782612596565b602082019050919050565b600060208201905081810360008301526125fb816125bf565b9050919050565b7f63616e27742063616c6c2073656e64577261707065642066726f6d204e61746960008201527f766520436861696e000000000000000000000000000000000000000000000000602082015250565b600061265e602883612383565b915061266982612602565b604082019050919050565b6000602082019050818103600083015261268d81612651565b9050919050565b600060a0820190506126a96000830188611e4c565b6126b66020830187611e4c565b6126c36040830186611e4c565b6126d060608301856121dd565b6126dd6080830184611e4c565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061272182611e42565b915061272c83611e42565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612761576127606126e7565b5b828201905092915050565b600060408201905061278160008301856121dd565b61278e6020830184611e4c565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006127cb602083612383565b91506127d682612795565b602082019050919050565b600060208201905081810360008301526127fa816127be565b9050919050565b600060608201905061281660008301866121dd565b6128236020830185611e4c565b6128306040830184611e4c565b949350505050565b7f5769746864726177416374696f6e000000000000000000000000000000000000600082015250565b600061286e600e83612437565b915061287982612838565b600e82019050919050565b600061288f82612861565b915061289b82846124d7565b915081905092915050565b60006080820190506128bb6000830187611e4c565b6128c860208301866121dd565b6128d56040830185611e4c565b6128e260608301846121dd565b95945050505050565b7f5570646174654f776e6572416374696f6e000000000000000000000000000000600082015250565b6000612921601183612437565b915061292c826128eb565b601182019050919050565b600061294282612914565b915061294e82846124d7565b915081905092915050565b600060a08201905061296e6000830188611e4c565b61297b60208301876121dd565b6129886040830186611e4c565b61299560608301856121dd565b6129a26080830184611e4c565b9695505050505050565b7f5472616e73666572416374696f6e000000000000000000000000000000000000600082015250565b60006129e2600e83612437565b91506129ed826129ac565b600e82019050919050565b6000612a03826129d5565b9150612a0f82846124d7565b915081905092915050565b7f63616e27742063616c6c2073656e644e61746976652066726f6d20577261707060008201527f656420436861696e000000000000000000000000000000000000000000000000602082015250565b6000612a76602883612383565b9150612a8182612a1a565b604082019050919050565b60006020820190508181036000830152612aa581612a69565b9050919050565b6000606082019050612ac160008301866121dd565b612ace60208301856121dd565b612adb6040830184611e4c565b949350505050565b612aec816120f0565b8114612af757600080fd5b50565b600081519050612b0981612ae3565b92915050565b600060208284031215612b2557612b24611f10565b5b6000612b3384828501612afa565b91505092915050565b7f6661696c656420746f207472616e7366657220746f6b656e7300000000000000600082015250565b6000612b72601983612383565b9150612b7d82612b3c565b602082019050919050565b60006020820190508181036000830152612ba181612b65565b9050919050565b600060a082019050612bbd6000830188611e4c565b612bca60208301876121dd565b612bd76040830186611e4c565b612be46060830185611e4c565b612bf1608083018461201f565b9695505050505050565b7f55706461746547726f75704b6579416374696f6e000000000000000000000000600082015250565b6000612c31601483612437565b9150612c3c82612bfb565b601482019050919050565b6000612c5282612c24565b9150612c5e82846124d7565b915081905092915050565b7f556e667265657a65416374696f6e000000000000000000000000000000000000600082015250565b6000612c9f600e83612437565b9150612caa82612c69565b600e82019050919050565b6000612cc082612c92565b9150612ccc82846124d7565b915081905092915050565b7f6661696c656420746f207472616e736665723f21000000000000000000000000600082015250565b6000612d0d601483612383565b9150612d1882612cd7565b602082019050919050565b60006020820190508181036000830152612d3c81612d00565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612d9f602683612383565b9150612daa82612d43565b604082019050919050565b60006020820190508181036000830152612dce81612d92565b9050919050565b7f5075626c69632d6b65792078203e3d2048414c465f5100000000000000000000600082015250565b6000612e0b601683612383565b9150612e1682612dd5565b602082019050919050565b60006020820190508181036000830152612e3a81612dfe565b9050919050565b7f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f60008201527f2051000000000000000000000000000000000000000000000000000000000000602082015250565b6000612e9d602283612383565b9150612ea882612e41565b604082019050919050565b60006020820190508181036000830152612ecc81612e90565b9050919050565b7f6e6f207a65726f20696e7075747320616c6c6f77656400000000000000000000600082015250565b6000612f09601683612383565b9150612f1482612ed3565b602082019050919050565b60006020820190508181036000830152612f3881612efc565b9050919050565b6000819050919050565b612f5a612f5582611e42565b612f3f565b82525050565b60008160f81b9050919050565b6000612f7882612f60565b9050919050565b612f90612f8b82612012565b612f6d565b82525050565b60008160601b9050919050565b6000612fae82612f96565b9050919050565b6000612fc082612fa3565b9050919050565b612fd8612fd382611f41565b612fb5565b82525050565b6000612fea8287612f49565b602082019150612ffa8286612f7f565b60018201915061300a8285612f49565b60208201915061301a8284612fc7565b60148201915081905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061306682611e42565b915061307183611e42565b925082821015613084576130836126e7565b5b828203905092915050565b6000819050919050565b6130a28161308f565b82525050565b60006080820190506130bd6000830187613099565b6130ca602083018661201f565b6130d76040830185613099565b6130e46060830184613099565b95945050505050565b7f6475706c696361746520616374696f6e21000000000000000000000000000000600082015250565b6000613123601183612383565b915061312e826130ed565b602082019050919050565b6000602082019050818103600083015261315281613116565b9050919050565b7f6461696c79206f7574666c6f77206c696d697420686974000000000000000000600082015250565b600061318f601783612383565b915061319a82613159565b602082019050919050565b600060208201905081810360008301526131be81613182565b9050919050565b7f6661696c656420746f20766572696679207369676e6174757265210000000000600082015250565b60006131fb601b83612383565b9150613206826131c5565b602082019050919050565b6000602082019050818103600083015261322a816131ee565b9050919050565b600061323c82611e42565b915061324783611e42565b9250826132575761325661302c565b5b82820490509291505056fea264697066735822122099533352234bc1554bc4c74cc56ce72988742dc4fd5618fd0ae60886b19bb59364736f6c634300080b0033";
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
