import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x41D5487836452d23f2c467070244E5842B412794',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000564',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.cake,
    earningToken: tokens.mxmx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xea23501d093946581030f28681e1dd29b65ceb06',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00076',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 14,
    stakingToken: tokens.cake,
    earningToken: tokens.mxmx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x99a44d26defb3f0a5b4e306ce45538c66c05b69e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.003298611',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.cake,
    earningToken: tokens.gitto,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xd97082fa64c7664aa9d5510a72d0f04badebb327',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00052',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 15,
    stakingToken: tokens.cake,
    earningToken: tokens.gitto,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x967a3feafdc737a5c40b3fa5ec6df954eb557ae6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00625',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.cake,
    earningToken: tokens.gcc2,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xb000bbb4ae5fedec2e06c731f50a187b306d0d8f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0000015',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 16,
    stakingToken: tokens.cake,
    earningToken: tokens.gcc2,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x826c774c8f1f52ea466e54d0bd8668808f5db4af',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00000277778',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.cake,
    earningToken: tokens.zoloto,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x7b072c20d2f03393145c6829175e9ac975fa2cfe',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2.17',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: tokens.cake,
    earningToken: tokens.rmbr,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x15e55c315f893d77337cb1eb31ca320c4e95564c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1562500000',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw:true
  },
  {
    sousId: 6,
    stakingToken: tokens.cake,
    earningToken: tokens.m01,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2bd7d2a773b525133c9a87910ae6baf8159d9484',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2256.94',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: tokens.mxmx,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xf834505a40b1dbec182a82c94c6a58d9c364542d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000069',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 17,
    stakingToken: tokens.mxmx,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xd06c84a7e10c2227105cbe0eb21511f18ab0f331',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000520833',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 8,
    stakingToken: tokens.gitto,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xebe42336aee179b8f520b11daa8e9b455091bfd0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00069',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 18,
    stakingToken: tokens.gitto,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x49e5bf17cff1e2a3c17989dcec954eba5753b3e7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000520833',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 9,
    stakingToken: tokens.gcc2,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x976057901564c3050ce521c9cbd0d6351a22bdea',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00069',
    sortOrder: 1,
    isFinished: false,
  },{
    sousId: 19,
    stakingToken: tokens.gcc2,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xa569e9aece7991199eda4246f7efcf1e92f2c5f6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000520833',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 10,
    stakingToken: tokens.mm72,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xe3d665bb601af0cd777442d706bc1c8f34b642a7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00069',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 11,
    stakingToken: tokens.marcobnb,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x19817977a4061626ac41e58de84328a037a93a26',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00076',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 12,
    stakingToken: tokens.mxmxbnb,
    earningToken: tokens.mxmx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x98eb6124b5edf5d2489db1f53c5b115ef5b69706',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00076',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 13,
    stakingToken: tokens.mm72bnb,
    earningToken: tokens.mm72,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x8fd9952d676c4288b4783668fe4c1c0e7464b6ca',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00076',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 20,
    stakingToken: tokens.cake,
    earningToken: tokens.bear,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x1ea5c2f8fe1da2e1a45b780f7a95ab94c0d3a00d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '9',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 21,
    stakingToken: tokens.cake,
    earningToken: tokens.volt,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x247d01695158024521ae06be2bf881de71545320',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2700',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 22,
    stakingToken: tokens.cake,
    earningToken: tokens.gcc2,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xcffd535ac335593ae328351b40215d39edc4d37b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000008',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 23,
    stakingToken: tokens.cake,
    earningToken: tokens.mxmx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x320b013b2816a631522a2fee074d3b27db25d6ba',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 24,
    stakingToken: tokens.cake,
    earningToken: tokens.fbtc,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xa0d13b9e05434b620072625f49fdec7b87142173',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '500',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 25,
    stakingToken: tokens.cake,
    earningToken: tokens.gwt,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xc3a9c6679f9b095d1ce7398a032728543b5193a9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '35',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 26,
    stakingToken: tokens.cake,
    earningToken: tokens.qcwc,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x5d2a3bd3dd873eadc314e119e622b74ecf7d7684',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1770',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 27,
    stakingToken: tokens.cake,
    earningToken: tokens.ostrich,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xeb0dd96bb5ba9b50798ebbe19c67a406204cb555',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '26000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 28,
    stakingToken: tokens.cake,
    earningToken: tokens.koala,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x57d755a995e578a9c21cf351af870b996f236e15',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '345',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 29,
    stakingToken: tokens.cake,
    earningToken: tokens.froge,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xb1c70b1b38b5b7043c36e250fd7b3a609e66b863',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '114',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 30,
    stakingToken: tokens.cake,
    earningToken: tokens.rotto,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xcfdc0d9e517299609588f860781f8341eff56f2c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '65',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 31,
    stakingToken: tokens.cake,
    earningToken: tokens.gpay,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x15dbba718836b77bcc082bc3ced44c0c390975a5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0069',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
