import { IdlAccounts, Idl } from '@coral-xyz/anchor';
export const FungibleEntanglerIDLJson: Idl & { metadata?: { address: string } } = {
  "address": "H3DsGwUVtFo3zwGqpTt5QKKV3nV7kmuvVVFHSkCZUtM7",
  "metadata": {  "address": "H3DsGwUVtFo3zwGqpTt5QKKV3nV7kmuvVVFHSkCZUtM7",

    "name": "fungibleEntangler",
    "version": "1.0.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "closeFungibleChildEntanglerV0",
      "discriminator": [
        167,
        156,
        45,
        255,
        234,
        40,
        234,
        125
      ],
      "accounts": [
        {
          "name": "refund",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parentEntangler",
          "writable": true,
          "relations": [
            "entangler"
          ]
        },
        {
          "name": "entangler",
          "writable": true
        },
        {
          "name": "childStorage",
          "writable": true,
          "relations": [
            "entangler"
          ]
        },
        {
          "name": "sourceTokenProgram"
        },
        {
          "name": "childTokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "closeFungibleParentEntanglerV0",
      "discriminator": [
        229,
        229,
        243,
        138,
        10,
        15,
        86,
        243
      ],
      "accounts": [
        {
          "name": "refund",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parentEntangler",
          "writable": true
        },
        {
          "name": "parentStorage",
          "writable": true,
          "relations": [
            "parentEntangler"
          ]
        },
        {
          "name": "sourceTokenProgram"
        },
        {
          "name": "childTokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "initializeFungibleChildEntanglerV0",
      "discriminator": [
        97,
        28,
        117,
        87,
        15,
        136,
        1,
        33
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parentEntangler",
          "writable": true
        },
        {
          "name": "entangler",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  110,
                  116,
                  97,
                  110,
                  103,
                  108,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "parentEntangler"
              },
              {
                "kind": "account",
                "path": "childMint"
              }
            ]
          }
        },
        {
          "name": "childStorage",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  111,
                  114,
                  97,
                  103,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "entangler"
              }
            ]
          }
        },
        {
          "name": "childMint"
        },
        {
          "name": "sourceTokenProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "initializeFungibleChildEntanglerV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "initializeFungibleParentEntanglerV0",
      "discriminator": [
        204,
        82,
        147,
        7,
        184,
        70,
        111,
        235
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "entangler",
          "writable": true
        },
        {
          "name": "parentStorage",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  111,
                  114,
                  97,
                  103,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "entangler"
              }
            ]
          }
        },
        {
          "name": "parentMint"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "childTokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "initializeFungibleParentEntanglerV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "swapChildForParentV0",
      "discriminator": [
        109,
        58,
        171,
        12,
        87,
        157,
        205,
        249
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "parentEntangler",
              "writable": true,
              "relations": [
                "childEntangler"
              ]
            },
            {
              "name": "parentStorage",
              "writable": true,
              "relations": [
                "parentEntangler"
              ]
            },
            {
              "name": "childEntangler",
              "writable": true
            },
            {
              "name": "childStorage",
              "writable": true,
              "relations": [
                "childEntangler"
              ]
            },
            {
              "name": "source",
              "writable": true
            },
            {
              "name": "sourceAuthority",
              "signer": true
            },
            {
              "name": "destination",
              "writable": true
            },
            {
              "name": "sourceTokenProgram"
            },
            {
              "name": "childTokenProgram"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            }
          ]
        },
        {
          "name": "childMint"
        },
        {
          "name": "parentMint"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "swapV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "swapParentForChildV0",
      "discriminator": [
        10,
        118,
        190,
        151,
        121,
        12,
        138,
        217
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "parentEntangler",
              "writable": true,
              "relations": [
                "childEntangler"
              ]
            },
            {
              "name": "parentStorage",
              "writable": true,
              "relations": [
                "parentEntangler"
              ]
            },
            {
              "name": "childEntangler",
              "writable": true
            },
            {
              "name": "childStorage",
              "writable": true,
              "relations": [
                "childEntangler"
              ]
            },
            {
              "name": "source",
              "writable": true
            },
            {
              "name": "sourceAuthority",
              "signer": true
            },
            {
              "name": "destination",
              "writable": true
            },
            {
              "name": "sourceTokenProgram"
            },
            {
              "name": "childTokenProgram"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            }
          ]
        },
        {
          "name": "parentMint"
        },
        {
          "name": "childMint"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "swapV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "transferChildStorageV0",
      "discriminator": [
        73,
        255,
        139,
        252,
        48,
        76,
        110,
        6
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parentEntangler",
          "writable": true,
          "relations": [
            "entangler"
          ]
        },
        {
          "name": "entangler"
        },
        {
          "name": "childStorage",
          "writable": true,
          "relations": [
            "entangler"
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "sourceTokenProgram"
        },
        {
          "name": "childTokenProgram"
        },
        {
          "name": "childMint"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "transferChildStorageArgsV0"
            }
          }
        }
      ]
    },
    {
      "name": "transferParentStorageV0",
      "discriminator": [
        140,
        6,
        181,
        183,
        35,
        156,
        177,
        92
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parentEntangler",
          "writable": true
        },
        {
          "name": "parentStorage",
          "writable": true,
          "relations": [
            "parentEntangler"
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "sourceTokenProgram"
        },
        {
          "name": "childTokenProgram"
        },
        {
          "name": "parentMint"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "transferParentStorageArgsV0"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "fungibleChildEntanglerV0",
      "discriminator": [
        97,
        99,
        84,
        86,
        207,
        94,
        142,
        250
      ]
    },
    {
      "name": "fungibleParentEntanglerV0",
      "discriminator": [
        241,
        199,
        85,
        98,
        225,
        17,
        71,
        44
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6001,
      "name": "invalidAuthority",
      "msg": "Invalid Authority"
    },
    {
      "code": 6002,
      "name": "tokenAccountAmountTooLow",
      "msg": "Cannot swap more than the token account currently has"
    },
    {
      "code": 6003,
      "name": "invalidArgs",
      "msg": "Amount or All must be provided"
    },
    {
      "code": 6004,
      "name": "parentNotLiveYet",
      "msg": "This parent entangler is not live yet"
    },
    {
      "code": 6005,
      "name": "childNotLiveYet",
      "msg": "This child entangler is not live yet"
    },
    {
      "code": 6006,
      "name": "parentSwapFrozen",
      "msg": "Swap is frozen on the parent entangler, swapping not allowed"
    },
    {
      "code": 6007,
      "name": "childSwapFrozen",
      "msg": "Swap is frozen on the child entangler, swapping not allowed"
    },
    {
      "code": 6008,
      "name": "noAuthority",
      "msg": "This entangler has no authority on it"
    }
  ],
  "types": [
    {
      "name": "fungibleChildEntanglerV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parentEntangler",
            "type": "pubkey"
          },
          {
            "name": "childMint",
            "type": "pubkey"
          },
          {
            "name": "childStorage",
            "type": "pubkey"
          },
          {
            "name": "goLiveUnixTime",
            "type": "i64"
          },
          {
            "name": "freezeSwapUnixTime",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "createdAtUnixTime",
            "type": "i64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "storageBumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "fungibleParentEntanglerV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parentMint",
            "type": "pubkey"
          },
          {
            "name": "parentStorage",
            "type": "pubkey"
          },
          {
            "name": "goLiveUnixTime",
            "type": "i64"
          },
          {
            "name": "freezeSwapUnixTime",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "createdAtUnixTime",
            "type": "i64"
          },
          {
            "name": "numChildren",
            "type": "u32"
          },
          {
            "name": "authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "dynamicSeed",
            "type": "bytes"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "storageBumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "initializeFungibleChildEntanglerV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "goLiveUnixTime",
            "type": "i64"
          },
          {
            "name": "freezeSwapUnixTime",
            "type": {
              "option": "i64"
            }
          }
        ]
      }
    },
    {
      "name": "initializeFungibleParentEntanglerV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "dynamicSeed",
            "type": "bytes"
          },
          {
            "name": "goLiveUnixTime",
            "type": "i64"
          },
          {
            "name": "freezeSwapUnixTime",
            "type": {
              "option": "i64"
            }
          }
        ]
      }
    },
    {
      "name": "swapV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "all",
            "type": {
              "option": "bool"
            }
          }
        ]
      }
    },
    {
      "name": "transferChildStorageArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "transferParentStorageArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export type FungibleEntanglerIDL = {
  "address": "H3DsGwUVtFo3zwGqpTt5QKKV3nV7kmuvVVFHSkCZUtM7",
  "name": "fungible_entangler",
  "version": "1.0.0",
  "metadata": {  "address": "H3DsGwUVtFo3zwGqpTt5QKKV3nV7kmuvVVFHSkCZUtM7",

    "name": "fungible_entangler",
    "version": "1.0.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "close_fungible_child_entangler_v0",
      "discriminator": [
        167,
        156,
        45,
        255,
        234,
        40,
        234,
        125
      ],
      "accounts": [
        {
          "name": "refund",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parent_entangler",
          "writable": true,
          "relations": [
            "entangler"
          ]
        },
        {
          "name": "entangler",
          "writable": true
        },
        {
          "name": "child_storage",
          "writable": true,
          "relations": [
            "entangler"
          ]
        },
        {
          "name": "source_token_program"
        },
        {
          "name": "child_token_program"
        }
      ],
      "args": []
    },
    {
      "name": "close_fungible_parent_entangler_v0",
      "discriminator": [
        229,
        229,
        243,
        138,
        10,
        15,
        86,
        243
      ],
      "accounts": [
        {
          "name": "refund",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parent_entangler",
          "writable": true
        },
        {
          "name": "parent_storage",
          "writable": true,
          "relations": [
            "parent_entangler"
          ]
        },
        {
          "name": "source_token_program"
        },
        {
          "name": "child_token_program"
        }
      ],
      "args": []
    },
    {
      "name": "initialize_fungible_child_entangler_v0",
      "discriminator": [
        97,
        28,
        117,
        87,
        15,
        136,
        1,
        33
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parent_entangler",
          "writable": true
        },
        {
          "name": "entangler",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  110,
                  116,
                  97,
                  110,
                  103,
                  108,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "parent_entangler"
              },
              {
                "kind": "account",
                "path": "child_mint"
              }
            ]
          }
        },
        {
          "name": "child_storage",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  111,
                  114,
                  97,
                  103,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "entangler"
              }
            ]
          }
        },
        {
          "name": "child_mint"
        },
        {
          "name": "source_token_program"
        },
        {
          "name": "token_program"
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "InitializeFungibleChildEntanglerV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "initialize_fungible_parent_entangler_v0",
      "discriminator": [
        204,
        82,
        147,
        7,
        184,
        70,
        111,
        235
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "entangler",
          "writable": true
        },
        {
          "name": "parent_storage",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  111,
                  114,
                  97,
                  103,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "entangler"
              }
            ]
          }
        },
        {
          "name": "parent_mint"
        },
        {
          "name": "token_program"
        },
        {
          "name": "child_token_program"
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "InitializeFungibleParentEntanglerV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "swap_child_for_parent_v0",
      "discriminator": [
        109,
        58,
        171,
        12,
        87,
        157,
        205,
        249
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "parent_entangler",
              "writable": true,
              "relations": [
                "child_entangler"
              ]
            },
            {
              "name": "parent_storage",
              "writable": true,
              "relations": [
                "parent_entangler"
              ]
            },
            {
              "name": "child_entangler",
              "writable": true
            },
            {
              "name": "child_storage",
              "writable": true,
              "relations": [
                "child_entangler"
              ]
            },
            {
              "name": "source",
              "writable": true
            },
            {
              "name": "source_authority",
              "signer": true
            },
            {
              "name": "destination",
              "writable": true
            },
            {
              "name": "source_token_program"
            },
            {
              "name": "child_token_program"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            }
          ]
        },
        {
          "name": "child_mint"
        },
        {
          "name": "parent_mint"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "SwapV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "swap_parent_for_child_v0",
      "discriminator": [
        10,
        118,
        190,
        151,
        121,
        12,
        138,
        217
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "parent_entangler",
              "writable": true,
              "relations": [
                "child_entangler"
              ]
            },
            {
              "name": "parent_storage",
              "writable": true,
              "relations": [
                "parent_entangler"
              ]
            },
            {
              "name": "child_entangler",
              "writable": true
            },
            {
              "name": "child_storage",
              "writable": true,
              "relations": [
                "child_entangler"
              ]
            },
            {
              "name": "source",
              "writable": true
            },
            {
              "name": "source_authority",
              "signer": true
            },
            {
              "name": "destination",
              "writable": true
            },
            {
              "name": "source_token_program"
            },
            {
              "name": "child_token_program"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            }
          ]
        },
        {
          "name": "parent_mint"
        },
        {
          "name": "child_mint"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "SwapV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "transfer_child_storage_v0",
      "discriminator": [
        73,
        255,
        139,
        252,
        48,
        76,
        110,
        6
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parent_entangler",
          "writable": true,
          "relations": [
            "entangler"
          ]
        },
        {
          "name": "entangler"
        },
        {
          "name": "child_storage",
          "writable": true,
          "relations": [
            "entangler"
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "source_token_program"
        },
        {
          "name": "child_token_program"
        },
        {
          "name": "child_mint"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "TransferChildStorageArgsV0"
            }
          }
        }
      ]
    },
    {
      "name": "transfer_parent_storage_v0",
      "discriminator": [
        140,
        6,
        181,
        183,
        35,
        156,
        177,
        92
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "parent_entangler",
          "writable": true
        },
        {
          "name": "parent_storage",
          "writable": true,
          "relations": [
            "parent_entangler"
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "source_token_program"
        },
        {
          "name": "child_token_program"
        },
        {
          "name": "parent_mint"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "TransferParentStorageArgsV0"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "FungibleChildEntanglerV0",
      "discriminator": [
        97,
        99,
        84,
        86,
        207,
        94,
        142,
        250
      ]
    },
    {
      "name": "FungibleParentEntanglerV0",
      "discriminator": [
        241,
        199,
        85,
        98,
        225,
        17,
        71,
        44
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6001,
      "name": "InvalidAuthority",
      "msg": "Invalid Authority"
    },
    {
      "code": 6002,
      "name": "TokenAccountAmountTooLow",
      "msg": "Cannot swap more than the token account currently has"
    },
    {
      "code": 6003,
      "name": "InvalidArgs",
      "msg": "Amount or All must be provided"
    },
    {
      "code": 6004,
      "name": "ParentNotLiveYet",
      "msg": "This parent entangler is not live yet"
    },
    {
      "code": 6005,
      "name": "ChildNotLiveYet",
      "msg": "This child entangler is not live yet"
    },
    {
      "code": 6006,
      "name": "ParentSwapFrozen",
      "msg": "Swap is frozen on the parent entangler, swapping not allowed"
    },
    {
      "code": 6007,
      "name": "ChildSwapFrozen",
      "msg": "Swap is frozen on the child entangler, swapping not allowed"
    },
    {
      "code": 6008,
      "name": "NoAuthority",
      "msg": "This entangler has no authority on it"
    }
  ],
  "types": [
    {
      "name": "FungibleChildEntanglerV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parent_entangler",
            "type": "pubkey"
          },
          {
            "name": "child_mint",
            "type": "pubkey"
          },
          {
            "name": "child_storage",
            "type": "pubkey"
          },
          {
            "name": "go_live_unix_time",
            "type": "i64"
          },
          {
            "name": "freeze_swap_unix_time",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "created_at_unix_time",
            "type": "i64"
          },
          {
            "name": "bump_seed",
            "type": "u8"
          },
          {
            "name": "storage_bump_seed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "FungibleParentEntanglerV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parent_mint",
            "type": "pubkey"
          },
          {
            "name": "parent_storage",
            "type": "pubkey"
          },
          {
            "name": "go_live_unix_time",
            "type": "i64"
          },
          {
            "name": "freeze_swap_unix_time",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "created_at_unix_time",
            "type": "i64"
          },
          {
            "name": "num_children",
            "type": "u32"
          },
          {
            "name": "authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "dynamic_seed",
            "type": "bytes"
          },
          {
            "name": "bump_seed",
            "type": "u8"
          },
          {
            "name": "storage_bump_seed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "InitializeFungibleChildEntanglerV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "go_live_unix_time",
            "type": "i64"
          },
          {
            "name": "freeze_swap_unix_time",
            "type": {
              "option": "i64"
            }
          }
        ]
      }
    },
    {
      "name": "InitializeFungibleParentEntanglerV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "dynamic_seed",
            "type": "bytes"
          },
          {
            "name": "go_live_unix_time",
            "type": "i64"
          },
          {
            "name": "freeze_swap_unix_time",
            "type": {
              "option": "i64"
            }
          }
        ]
      }
    },
    {
      "name": "SwapV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "all",
            "type": {
              "option": "bool"
            }
          }
        ]
      }
    },
    {
      "name": "TransferChildStorageArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "TransferParentStorageArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ]
}

  

export type FungibleParentEntanglerV0 = IdlAccounts<FungibleEntanglerIDL>["FungibleParentEntanglerV0"]

export type FungibleChildEntanglerV0 = IdlAccounts<FungibleEntanglerIDL>["FungibleChildEntanglerV0"]
  
          