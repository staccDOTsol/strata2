import { IdlAccounts, Idl } from '@coral-xyz/anchor';
export const SplTokenBondingIDLJson: any & { metadata?: { address: string } } = {
  "address": "EMiLu1JvEgNiukGYfMvTRJk8DQqwM7PjWU8HAvUdDgwv",
  "metadata": {
    "name": "splTokenBonding",
    "version": "3.9.2",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "buyNativeV0",
      "discriminator": [
        161,
        81,
        234,
        221,
        249,
        227,
        95,
        20
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "tokenBonding",
              "writable": true
            },
            {
              "name": "curve",
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseMint"
            },
            {
              "name": "targetMint",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseStorage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "tokenBonding"
                  },
                  {
                    "kind": "account",
                    "path": "baseTokenProgram"
                  },
                  {
                    "kind": "account",
                    "path": "baseMint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "buyBaseRoyalties",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "destination",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "destinationAuthority"
                  },
                  {
                    "kind": "account",
                    "path": "targetTokenProgram"
                  },
                  {
                    "kind": "account",
                    "path": "targetMint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "buyTargetRoyalties",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseTokenProgram"
            },
            {
              "name": "targetTokenProgram"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            },
            {
              "name": "payer",
              "writable": true,
              "signer": true
            },
            {
              "name": "destinationAuthority"
            },
            {
              "name": "systemProgram",
              "address": "11111111111111111111111111111111"
            },
            {
              "name": "associatedTokenProgram"
            }
          ]
        },
        {
          "name": "source",
          "writable": true,
          "signer": true
        },
        {
          "name": "state"
        },
        {
          "name": "wrappedSolMint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "mintAuthority"
        },
        {
          "name": "solStorage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "buyV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "buyV1",
      "discriminator": [
        69,
        255,
        7,
        52,
        119,
        228,
        164,
        6
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "tokenBonding",
              "writable": true
            },
            {
              "name": "curve",
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseMint"
            },
            {
              "name": "targetMint",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseStorage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "tokenBonding"
                  },
                  {
                    "kind": "account",
                    "path": "baseTokenProgram"
                  },
                  {
                    "kind": "account",
                    "path": "baseMint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "buyBaseRoyalties",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "destination",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "destinationAuthority"
                  },
                  {
                    "kind": "account",
                    "path": "targetTokenProgram"
                  },
                  {
                    "kind": "account",
                    "path": "targetMint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "buyTargetRoyalties",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseTokenProgram"
            },
            {
              "name": "targetTokenProgram"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            },
            {
              "name": "payer",
              "writable": true,
              "signer": true
            },
            {
              "name": "destinationAuthority"
            },
            {
              "name": "systemProgram",
              "address": "11111111111111111111111111111111"
            },
            {
              "name": "associatedTokenProgram"
            }
          ]
        },
        {
          "name": "state"
        },
        {
          "name": "source",
          "writable": true
        },
        {
          "name": "sourceAuthority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "buyV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "buyWrappedSolV0",
      "discriminator": [
        147,
        243,
        74,
        130,
        34,
        114,
        38,
        33
      ],
      "accounts": [
        {
          "name": "state"
        },
        {
          "name": "wrappedSolMint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "mintAuthority"
        },
        {
          "name": "solStorage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "source",
          "writable": true,
          "signer": true
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "baseTokenProgram"
        },
        {
          "name": "targetTokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "buyWrappedSolV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "closeTokenBondingV0",
      "discriminator": [
        160,
        94,
        159,
        74,
        193,
        107,
        122,
        168
      ],
      "accounts": [
        {
          "name": "refund",
          "writable": true
        },
        {
          "name": "tokenBonding",
          "writable": true
        },
        {
          "name": "generalAuthority",
          "signer": true
        },
        {
          "name": "targetMint",
          "writable": true,
          "relations": [
            "tokenBonding"
          ]
        },
        {
          "name": "baseStorage",
          "writable": true
        },
        {
          "name": "baseTokenProgram"
        },
        {
          "name": "targetTokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "createCurveV0",
      "discriminator": [
        205,
        203,
        250,
        201,
        156,
        135,
        114,
        221
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "curve",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "createCurveV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "initializeSolStorageV0",
      "discriminator": [
        20,
        26,
        34,
        233,
        185,
        171,
        12,
        98
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "state",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "solStorage",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  111,
                  108,
                  45,
                  115,
                  116,
                  111,
                  114,
                  97,
                  103,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "wrappedSolMint",
          "writable": true,
          "signer": true
        },
        {
          "name": "mintAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  100,
                  45,
                  115,
                  111,
                  108,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "baseTokenProgram"
        },
        {
          "name": "targetTokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "initializeSolStorageV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "initializeTokenBondingV0",
      "discriminator": [
        4,
        205,
        255,
        32,
        185,
        121,
        134,
        61
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "curve"
        },
        {
          "name": "tokenBonding",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  111,
                  107,
                  101,
                  110,
                  45,
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "targetMint"
              },
              {
                "kind": "arg",
                "path": "args.index"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "targetMint"
        },
        {
          "name": "baseStorage"
        },
        {
          "name": "buyBaseRoyalties"
        },
        {
          "name": "buyTargetRoyalties"
        },
        {
          "name": "sellBaseRoyalties"
        },
        {
          "name": "sellTargetRoyalties"
        },
        {
          "name": "baseTokenProgram"
        },
        {
          "name": "targetTokenProgram"
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
              "name": "initializeTokenBondingV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "sellNativeV0",
      "discriminator": [
        29,
        129,
        234,
        157,
        18,
        252,
        113,
        179
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "tokenBonding",
              "writable": true
            },
            {
              "name": "curve",
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseMint"
            },
            {
              "name": "targetMint",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseStorage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "tokenBonding"
                  },
                  {
                    "kind": "account",
                    "path": "baseTokenProgram"
                  },
                  {
                    "kind": "account",
                    "path": "baseMint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "sellBaseRoyalties",
              "writable": true,
              "relations": [
                "tokenBonding"
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
              "name": "sellTargetRoyalties",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseTokenProgram"
            },
            {
              "name": "targetTokenProgram"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            }
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "state"
        },
        {
          "name": "wrappedSolMint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "mintAuthority"
        },
        {
          "name": "solStorage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "sellV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "sellV1",
      "discriminator": [
        19,
        129,
        236,
        31,
        99,
        212,
        19,
        208
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "tokenBonding",
              "writable": true
            },
            {
              "name": "curve",
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseMint"
            },
            {
              "name": "targetMint",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseStorage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "tokenBonding"
                  },
                  {
                    "kind": "account",
                    "path": "baseTokenProgram"
                  },
                  {
                    "kind": "account",
                    "path": "baseMint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "sellBaseRoyalties",
              "writable": true,
              "relations": [
                "tokenBonding"
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
              "name": "sellTargetRoyalties",
              "writable": true,
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseTokenProgram"
            },
            {
              "name": "targetTokenProgram"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            }
          ]
        },
        {
          "name": "state"
        },
        {
          "name": "destination",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "sellV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "sellWrappedSolV0",
      "discriminator": [
        121,
        226,
        81,
        179,
        229,
        22,
        180,
        12
      ],
      "accounts": [
        {
          "name": "state"
        },
        {
          "name": "wrappedSolMint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "solStorage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "source",
          "writable": true
        },
        {
          "name": "owner",
          "signer": true,
          "relations": [
            "source"
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "baseTokenProgram"
        },
        {
          "name": "targetTokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "sellWrappedSolV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "transferReservesNativeV0",
      "discriminator": [
        182,
        139,
        99,
        4,
        205,
        169,
        172,
        224
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "tokenBonding",
              "writable": true
            },
            {
              "name": "reserveAuthority",
              "signer": true
            },
            {
              "name": "baseMint",
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseStorage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "tokenBonding"
                  },
                  {
                    "kind": "account",
                    "path": "baseTokenProgram"
                  },
                  {
                    "kind": "account",
                    "path": "baseMint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "baseTokenProgram"
            },
            {
              "name": "targetTokenProgram"
            }
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "state"
        },
        {
          "name": "wrappedSolMint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "mintAuthority"
        },
        {
          "name": "solStorage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "transferReservesV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "transferReservesV0",
      "discriminator": [
        7,
        142,
        255,
        166,
        164,
        247,
        159,
        157
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "tokenBonding",
              "writable": true
            },
            {
              "name": "reserveAuthority",
              "signer": true
            },
            {
              "name": "baseMint",
              "relations": [
                "tokenBonding"
              ]
            },
            {
              "name": "baseStorage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "tokenBonding"
                  },
                  {
                    "kind": "account",
                    "path": "baseTokenProgram"
                  },
                  {
                    "kind": "account",
                    "path": "baseMint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "baseTokenProgram"
            },
            {
              "name": "targetTokenProgram"
            }
          ]
        },
        {
          "name": "destination",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "transferReservesV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "updateCurveV0",
      "discriminator": [
        71,
        14,
        111,
        54,
        161,
        23,
        97,
        85
      ],
      "accounts": [
        {
          "name": "tokenBonding",
          "writable": true
        },
        {
          "name": "curveAuthority",
          "signer": true
        },
        {
          "name": "curve"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "updateCurveV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "updateReserveAuthorityV0",
      "discriminator": [
        140,
        105,
        17,
        234,
        229,
        79,
        133,
        150
      ],
      "accounts": [
        {
          "name": "tokenBonding",
          "writable": true
        },
        {
          "name": "reserveAuthority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "updateReserveAuthorityV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "updateTokenBondingV0",
      "discriminator": [
        10,
        181,
        83,
        74,
        124,
        211,
        123,
        48
      ],
      "accounts": [
        {
          "name": "tokenBonding",
          "writable": true
        },
        {
          "name": "generalAuthority",
          "signer": true
        },
        {
          "name": "baseMint",
          "relations": [
            "tokenBonding"
          ]
        },
        {
          "name": "targetMint",
          "relations": [
            "tokenBonding"
          ]
        },
        {
          "name": "buyBaseRoyalties"
        },
        {
          "name": "buyTargetRoyalties"
        },
        {
          "name": "sellBaseRoyalties"
        },
        {
          "name": "sellTargetRoyalties"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "updateTokenBondingV0Args"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "curveV0",
      "discriminator": [
        77,
        25,
        232,
        252,
        138,
        96,
        1,
        172
      ]
    },
    {
      "name": "programStateV0",
      "discriminator": [
        102,
        65,
        191,
        196,
        12,
        36,
        248,
        123
      ]
    },
    {
      "name": "tokenBondingV0",
      "discriminator": [
        83,
        36,
        213,
        250,
        189,
        200,
        154,
        127
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "noMintAuthority",
      "msg": "Target mint must have an authority"
    },
    {
      "code": 6001,
      "name": "invalidMintAuthority",
      "msg": "Target mint must have an authority that is a pda of this program"
    },
    {
      "code": 6002,
      "name": "invalidBaseStorageAuthority",
      "msg": "Invalid base storage authority pda or seed did not match canonical seed for base storage authority"
    },
    {
      "code": 6003,
      "name": "noAuthority",
      "msg": "Token bonding does not have an authority"
    },
    {
      "code": 6004,
      "name": "arithmeticError",
      "msg": "Error in precise number arithmetic"
    },
    {
      "code": 6005,
      "name": "priceTooHigh",
      "msg": "Buy price was higher than the maximum buy price. Try increasing max_price or slippage configuration"
    },
    {
      "code": 6006,
      "name": "priceTooLow",
      "msg": "Sell price was lower than the minimum sell price. Try decreasing min_price or increasing slippage configuration"
    },
    {
      "code": 6007,
      "name": "mintSupplyTooLow",
      "msg": "Cannot sell more than the target mint currently has in supply"
    },
    {
      "code": 6008,
      "name": "sellDisabled",
      "msg": "Sell is not enabled on this bonding curve"
    },
    {
      "code": 6009,
      "name": "notLiveYet",
      "msg": "This bonding curve is not live yet"
    },
    {
      "code": 6010,
      "name": "passedMintCap",
      "msg": "Passed the mint cap"
    },
    {
      "code": 6011,
      "name": "overPurchaseCap",
      "msg": "Cannot purchase that many tokens because of purchase cap"
    },
    {
      "code": 6012,
      "name": "buyFrozen",
      "msg": "Buy is frozen on this bonding curve, purchases not allowed"
    },
    {
      "code": 6013,
      "name": "wrappedSolNotAllowed",
      "msg": "Use token bonding wrapped sol via buy_wrapped_sol, sell_wrapped_sol commands. We may one day provide liquid staking rewards on this stored sol."
    },
    {
      "code": 6014,
      "name": "invalidCurve",
      "msg": "The provided curve is invalid"
    },
    {
      "code": 6015,
      "name": "invalidMint",
      "msg": "An account was provided that did not have the correct mint"
    },
    {
      "code": 6016,
      "name": "ignoreExternalV1Only",
      "msg": "Ignoring external changes is only supported on v1 of buy and sell endpoints. Please upgrade your client"
    },
    {
      "code": 6017,
      "name": "invalidPad",
      "msg": "Cannot pad token bonding without ignoring external reserve and supply changes. This is an advanced feature, incorrect use could lead to insufficient resreves to cover sells"
    }
  ],
  "types": [
    {
      "name": "buyTargetAmountV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetAmount",
            "type": "u64"
          },
          {
            "name": "maximumPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "buyV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyWithBase",
            "type": {
              "option": {
                "defined": {
                  "name": "buyWithBaseV0Args"
                }
              }
            }
          },
          {
            "name": "buyTargetAmount",
            "type": {
              "option": {
                "defined": {
                  "name": "buyTargetAmountV0Args"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "buyWithBaseV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseAmount",
            "type": "u64"
          },
          {
            "name": "minimumTargetAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "buyWrappedSolV0Args",
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
      "name": "createCurveV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "definition",
            "type": {
              "defined": {
                "name": "piecewiseCurve"
              }
            }
          }
        ]
      }
    },
    {
      "name": "curveV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "definition",
            "type": {
              "defined": {
                "name": "piecewiseCurve"
              }
            }
          }
        ]
      }
    },
    {
      "name": "initializeSolStorageV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintAuthorityBumpSeed",
            "type": "u8"
          },
          {
            "name": "solStorageBumpSeed",
            "type": "u8"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "initializeTokenBondingV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyBaseRoyaltyPercentage",
            "docs": [
              "Percentage of purchases that go to the founder",
              "Percentage Value is (founder_reward_percentage / u32.MAX_VALUE) * 100"
            ],
            "type": "u32"
          },
          {
            "name": "buyTargetRoyaltyPercentage",
            "type": "u32"
          },
          {
            "name": "sellBaseRoyaltyPercentage",
            "type": "u32"
          },
          {
            "name": "sellTargetRoyaltyPercentage",
            "type": "u32"
          },
          {
            "name": "goLiveUnixTime",
            "type": "i64"
          },
          {
            "name": "freezeBuyUnixTime",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "mintCap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "purchaseCap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "generalAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "reserveAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "curveAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "buyFrozen",
            "type": "bool"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "sellFrozen",
            "type": "bool"
          },
          {
            "name": "ignoreExternalReserveChanges",
            "docs": [
              "Whether or not to ignore changes to base storage and target supply outside of the curve"
            ],
            "type": "bool"
          },
          {
            "name": "ignoreExternalSupplyChanges",
            "type": "bool"
          },
          {
            "name": "initialReservesPad",
            "docs": [
              "* Allow starting a curve from a later reserve/supply ratio of ignor reserve and supply changes.\n   *\n   * This allows for things like the LBC where you don't need to provide any initial liquidity"
            ],
            "type": "u64"
          },
          {
            "name": "initialSupplyPad",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "piecewiseCurve",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "timeV0",
            "fields": [
              {
                "name": "curves",
                "type": {
                  "vec": {
                    "defined": {
                      "name": "timeCurveV0"
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "primitiveCurve",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "exponentialCurveV0",
            "fields": [
              {
                "name": "c",
                "type": "u128"
              },
              {
                "name": "b",
                "type": "u128"
              },
              {
                "name": "pow",
                "type": "u8"
              },
              {
                "name": "frac",
                "type": "u8"
              }
            ]
          },
          {
            "name": "timeDecayExponentialCurveV0",
            "fields": [
              {
                "name": "c",
                "type": "u128"
              },
              {
                "name": "k1",
                "type": "u128"
              },
              {
                "name": "k0",
                "type": "u128"
              },
              {
                "name": "interval",
                "type": "u32"
              },
              {
                "name": "d",
                "type": "u128"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "programStateV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wrappedSolMint",
            "type": "pubkey"
          },
          {
            "name": "solStorage",
            "type": "pubkey"
          },
          {
            "name": "mintAuthorityBumpSeed",
            "type": "u8"
          },
          {
            "name": "solStorageBumpSeed",
            "type": "u8"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "sellV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetAmount",
            "type": "u64"
          },
          {
            "name": "minimumPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "sellWrappedSolV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "all",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "timeCurveV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offset",
            "type": "i64"
          },
          {
            "name": "curve",
            "type": {
              "defined": {
                "name": "primitiveCurve"
              }
            }
          },
          {
            "name": "buyTransitionFees",
            "type": {
              "option": {
                "defined": {
                  "name": "transitionFeeV0"
                }
              }
            }
          },
          {
            "name": "sellTransitionFees",
            "type": {
              "option": {
                "defined": {
                  "name": "transitionFeeV0"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "tokenBondingV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseMint",
            "type": "pubkey"
          },
          {
            "name": "targetMint",
            "type": "pubkey"
          },
          {
            "name": "generalAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "reserveAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "curveAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "baseStorage",
            "type": "pubkey"
          },
          {
            "name": "buyBaseRoyalties",
            "type": "pubkey"
          },
          {
            "name": "buyTargetRoyalties",
            "type": "pubkey"
          },
          {
            "name": "sellBaseRoyalties",
            "type": "pubkey"
          },
          {
            "name": "sellTargetRoyalties",
            "type": "pubkey"
          },
          {
            "name": "buyBaseRoyaltyPercentage",
            "docs": [
              "Percentage of purchases that go to royalties",
              "Percentage Value is (founder_reward_percentage / u32.MAX_VALUE) * 100"
            ],
            "type": "u32"
          },
          {
            "name": "buyTargetRoyaltyPercentage",
            "type": "u32"
          },
          {
            "name": "sellBaseRoyaltyPercentage",
            "type": "u32"
          },
          {
            "name": "sellTargetRoyaltyPercentage",
            "type": "u32"
          },
          {
            "name": "curve",
            "docs": [
              "The bonding curve to use"
            ],
            "type": "pubkey"
          },
          {
            "name": "mintCap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "purchaseCap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "goLiveUnixTime",
            "type": "i64"
          },
          {
            "name": "freezeBuyUnixTime",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "createdAtUnixTime",
            "type": "i64"
          },
          {
            "name": "buyFrozen",
            "type": "bool"
          },
          {
            "name": "sellFrozen",
            "type": "bool"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "baseStorageBumpSeed",
            "type": "u8"
          },
          {
            "name": "targetMintAuthorityBumpSeed",
            "type": "u8"
          },
          {
            "name": "baseStorageAuthorityBumpSeed",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "reserveBalanceFromBonding",
            "type": "u64"
          },
          {
            "name": "supplyFromBonding",
            "type": "u64"
          },
          {
            "name": "ignoreExternalReserveChanges",
            "docs": [
              "Whether or not to ignore changes to base storage and target supply outside of the curve"
            ],
            "type": "bool"
          },
          {
            "name": "ignoreExternalSupplyChanges",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "transferReservesV0Args",
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
      "name": "transitionFeeV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "percentage",
            "type": "u32"
          },
          {
            "name": "interval",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "updateCurveV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "curveAuthority",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "updateReserveAuthorityV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "newReserveAuthority",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "updateTokenBondingV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "generalAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "buyBaseRoyaltyPercentage",
            "docs": [
              "Percentage of purchases that go to the founder",
              "Percentage Value is (founder_reward_percentage / u32.MAX_VALUE) * 100"
            ],
            "type": "u32"
          },
          {
            "name": "buyTargetRoyaltyPercentage",
            "type": "u32"
          },
          {
            "name": "sellBaseRoyaltyPercentage",
            "type": "u32"
          },
          {
            "name": "sellTargetRoyaltyPercentage",
            "type": "u32"
          },
          {
            "name": "buyFrozen",
            "type": "bool"
          }
        ]
      }
    }
  ]
};


export type SplTokenBondingIDL = {
  "address": "EMiLu1JvEgNiukGYfMvTRJk8DQqwM7PjWU8HAvUdDgwv",
  "metadata": {
    "name": "spl_token_bonding",
    "version": "3.9.2",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "buy_native_v0",
      "discriminator": [
        161,
        81,
        234,
        221,
        249,
        227,
        95,
        20
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "token_bonding",
              "writable": true
            },
            {
              "name": "curve",
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_mint"
            },
            {
              "name": "target_mint",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_storage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "token_bonding"
                  },
                  {
                    "kind": "account",
                    "path": "base_token_program"
                  },
                  {
                    "kind": "account",
                    "path": "base_mint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "buy_base_royalties",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "destination",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "destination_authority"
                  },
                  {
                    "kind": "account",
                    "path": "target_token_program"
                  },
                  {
                    "kind": "account",
                    "path": "target_mint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "buy_target_royalties",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_token_program"
            },
            {
              "name": "target_token_program"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            },
            {
              "name": "payer",
              "writable": true,
              "signer": true
            },
            {
              "name": "destination_authority"
            },
            {
              "name": "system_program",
              "address": "11111111111111111111111111111111"
            },
            {
              "name": "associated_token_program"
            }
          ]
        },
        {
          "name": "source",
          "writable": true,
          "signer": true
        },
        {
          "name": "state"
        },
        {
          "name": "wrapped_sol_mint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "mint_authority"
        },
        {
          "name": "sol_storage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "BuyV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "buy_v1",
      "discriminator": [
        69,
        255,
        7,
        52,
        119,
        228,
        164,
        6
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "token_bonding",
              "writable": true
            },
            {
              "name": "curve",
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_mint"
            },
            {
              "name": "target_mint",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_storage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "token_bonding"
                  },
                  {
                    "kind": "account",
                    "path": "base_token_program"
                  },
                  {
                    "kind": "account",
                    "path": "base_mint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "buy_base_royalties",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "destination",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "destination_authority"
                  },
                  {
                    "kind": "account",
                    "path": "target_token_program"
                  },
                  {
                    "kind": "account",
                    "path": "target_mint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "buy_target_royalties",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_token_program"
            },
            {
              "name": "target_token_program"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            },
            {
              "name": "payer",
              "writable": true,
              "signer": true
            },
            {
              "name": "destination_authority"
            },
            {
              "name": "system_program",
              "address": "11111111111111111111111111111111"
            },
            {
              "name": "associated_token_program"
            }
          ]
        },
        {
          "name": "state"
        },
        {
          "name": "source",
          "writable": true
        },
        {
          "name": "source_authority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "BuyV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "buy_wrapped_sol_v0",
      "discriminator": [
        147,
        243,
        74,
        130,
        34,
        114,
        38,
        33
      ],
      "accounts": [
        {
          "name": "state"
        },
        {
          "name": "wrapped_sol_mint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "mint_authority"
        },
        {
          "name": "sol_storage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "source",
          "writable": true,
          "signer": true
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "base_token_program"
        },
        {
          "name": "target_token_program"
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "BuyWrappedSolV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "close_token_bonding_v0",
      "discriminator": [
        160,
        94,
        159,
        74,
        193,
        107,
        122,
        168
      ],
      "accounts": [
        {
          "name": "refund",
          "writable": true
        },
        {
          "name": "token_bonding",
          "writable": true
        },
        {
          "name": "general_authority",
          "signer": true
        },
        {
          "name": "target_mint",
          "writable": true,
          "relations": [
            "token_bonding"
          ]
        },
        {
          "name": "base_storage",
          "writable": true
        },
        {
          "name": "base_token_program"
        },
        {
          "name": "target_token_program"
        }
      ],
      "args": []
    },
    {
      "name": "create_curve_v0",
      "discriminator": [
        205,
        203,
        250,
        201,
        156,
        135,
        114,
        221
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "curve",
          "writable": true
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "CreateCurveV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "initialize_sol_storage_v0",
      "discriminator": [
        20,
        26,
        34,
        233,
        185,
        171,
        12,
        98
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "state",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "sol_storage",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  111,
                  108,
                  45,
                  115,
                  116,
                  111,
                  114,
                  97,
                  103,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "wrapped_sol_mint",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint_authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  100,
                  45,
                  115,
                  111,
                  108,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "base_token_program"
        },
        {
          "name": "target_token_program"
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "InitializeSolStorageV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "initialize_token_bonding_v0",
      "discriminator": [
        4,
        205,
        255,
        32,
        185,
        121,
        134,
        61
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "curve"
        },
        {
          "name": "token_bonding",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  111,
                  107,
                  101,
                  110,
                  45,
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "target_mint"
              },
              {
                "kind": "arg",
                "path": "args.index"
              }
            ]
          }
        },
        {
          "name": "base_mint"
        },
        {
          "name": "target_mint"
        },
        {
          "name": "base_storage"
        },
        {
          "name": "buy_base_royalties"
        },
        {
          "name": "buy_target_royalties"
        },
        {
          "name": "sell_base_royalties"
        },
        {
          "name": "sell_target_royalties"
        },
        {
          "name": "base_token_program"
        },
        {
          "name": "target_token_program"
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
              "name": "InitializeTokenBondingV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "sell_native_v0",
      "discriminator": [
        29,
        129,
        234,
        157,
        18,
        252,
        113,
        179
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "token_bonding",
              "writable": true
            },
            {
              "name": "curve",
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_mint"
            },
            {
              "name": "target_mint",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_storage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "token_bonding"
                  },
                  {
                    "kind": "account",
                    "path": "base_token_program"
                  },
                  {
                    "kind": "account",
                    "path": "base_mint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "sell_base_royalties",
              "writable": true,
              "relations": [
                "token_bonding"
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
              "name": "sell_target_royalties",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_token_program"
            },
            {
              "name": "target_token_program"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            }
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "state"
        },
        {
          "name": "wrapped_sol_mint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "mint_authority"
        },
        {
          "name": "sol_storage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "SellV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "sell_v1",
      "discriminator": [
        19,
        129,
        236,
        31,
        99,
        212,
        19,
        208
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "token_bonding",
              "writable": true
            },
            {
              "name": "curve",
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_mint"
            },
            {
              "name": "target_mint",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_storage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "token_bonding"
                  },
                  {
                    "kind": "account",
                    "path": "base_token_program"
                  },
                  {
                    "kind": "account",
                    "path": "base_mint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "sell_base_royalties",
              "writable": true,
              "relations": [
                "token_bonding"
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
              "name": "sell_target_royalties",
              "writable": true,
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_token_program"
            },
            {
              "name": "target_token_program"
            },
            {
              "name": "clock",
              "address": "SysvarC1ock11111111111111111111111111111111"
            }
          ]
        },
        {
          "name": "state"
        },
        {
          "name": "destination",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "SellV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "sell_wrapped_sol_v0",
      "discriminator": [
        121,
        226,
        81,
        179,
        229,
        22,
        180,
        12
      ],
      "accounts": [
        {
          "name": "state"
        },
        {
          "name": "wrapped_sol_mint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "sol_storage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "source",
          "writable": true
        },
        {
          "name": "owner",
          "signer": true,
          "relations": [
            "source"
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "base_token_program"
        },
        {
          "name": "target_token_program"
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "SellWrappedSolV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "transfer_reserves_native_v0",
      "discriminator": [
        182,
        139,
        99,
        4,
        205,
        169,
        172,
        224
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "token_bonding",
              "writable": true
            },
            {
              "name": "reserve_authority",
              "signer": true
            },
            {
              "name": "base_mint",
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_storage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "token_bonding"
                  },
                  {
                    "kind": "account",
                    "path": "base_token_program"
                  },
                  {
                    "kind": "account",
                    "path": "base_mint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "base_token_program"
            },
            {
              "name": "target_token_program"
            }
          ]
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "state"
        },
        {
          "name": "wrapped_sol_mint",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "mint_authority"
        },
        {
          "name": "sol_storage",
          "writable": true,
          "relations": [
            "state"
          ]
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "TransferReservesV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "transfer_reserves_v0",
      "discriminator": [
        7,
        142,
        255,
        166,
        164,
        247,
        159,
        157
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "token_bonding",
              "writable": true
            },
            {
              "name": "reserve_authority",
              "signer": true
            },
            {
              "name": "base_mint",
              "relations": [
                "token_bonding"
              ]
            },
            {
              "name": "base_storage",
              "writable": true,
              "pda": {
                "seeds": [
                  {
                    "kind": "account",
                    "path": "token_bonding"
                  },
                  {
                    "kind": "account",
                    "path": "base_token_program"
                  },
                  {
                    "kind": "account",
                    "path": "base_mint"
                  }
                ],
                "program": {
                  "kind": "const",
                  "value": [
                    140,
                    151,
                    37,
                    143,
                    78,
                    36,
                    137,
                    241,
                    187,
                    61,
                    16,
                    41,
                    20,
                    142,
                    13,
                    131,
                    11,
                    90,
                    19,
                    153,
                    218,
                    255,
                    16,
                    132,
                    4,
                    142,
                    123,
                    216,
                    219,
                    233,
                    248,
                    89
                  ]
                }
              }
            },
            {
              "name": "base_token_program"
            },
            {
              "name": "target_token_program"
            }
          ]
        },
        {
          "name": "destination",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "TransferReservesV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "update_curve_v0",
      "discriminator": [
        71,
        14,
        111,
        54,
        161,
        23,
        97,
        85
      ],
      "accounts": [
        {
          "name": "token_bonding",
          "writable": true
        },
        {
          "name": "curve_authority",
          "signer": true
        },
        {
          "name": "curve"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "UpdateCurveV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "update_reserve_authority_v0",
      "discriminator": [
        140,
        105,
        17,
        234,
        229,
        79,
        133,
        150
      ],
      "accounts": [
        {
          "name": "token_bonding",
          "writable": true
        },
        {
          "name": "reserve_authority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "UpdateReserveAuthorityV0Args"
            }
          }
        }
      ]
    },
    {
      "name": "update_token_bonding_v0",
      "discriminator": [
        10,
        181,
        83,
        74,
        124,
        211,
        123,
        48
      ],
      "accounts": [
        {
          "name": "token_bonding",
          "writable": true
        },
        {
          "name": "general_authority",
          "signer": true
        },
        {
          "name": "base_mint",
          "relations": [
            "token_bonding"
          ]
        },
        {
          "name": "target_mint",
          "relations": [
            "token_bonding"
          ]
        },
        {
          "name": "buy_base_royalties"
        },
        {
          "name": "buy_target_royalties"
        },
        {
          "name": "sell_base_royalties"
        },
        {
          "name": "sell_target_royalties"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "UpdateTokenBondingV0Args"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "CurveV0",
      "discriminator": [
        77,
        25,
        232,
        252,
        138,
        96,
        1,
        172
      ]
    },
    {
      "name": "ProgramStateV0",
      "discriminator": [
        102,
        65,
        191,
        196,
        12,
        36,
        248,
        123
      ]
    },
    {
      "name": "TokenBondingV0",
      "discriminator": [
        83,
        36,
        213,
        250,
        189,
        200,
        154,
        127
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NoMintAuthority",
      "msg": "Target mint must have an authority"
    },
    {
      "code": 6001,
      "name": "InvalidMintAuthority",
      "msg": "Target mint must have an authority that is a pda of this program"
    },
    {
      "code": 6002,
      "name": "InvalidBaseStorageAuthority",
      "msg": "Invalid base storage authority pda or seed did not match canonical seed for base storage authority"
    },
    {
      "code": 6003,
      "name": "NoAuthority",
      "msg": "Token bonding does not have an authority"
    },
    {
      "code": 6004,
      "name": "ArithmeticError",
      "msg": "Error in precise number arithmetic"
    },
    {
      "code": 6005,
      "name": "PriceTooHigh",
      "msg": "Buy price was higher than the maximum buy price. Try increasing max_price or slippage configuration"
    },
    {
      "code": 6006,
      "name": "PriceTooLow",
      "msg": "Sell price was lower than the minimum sell price. Try decreasing min_price or increasing slippage configuration"
    },
    {
      "code": 6007,
      "name": "MintSupplyTooLow",
      "msg": "Cannot sell more than the target mint currently has in supply"
    },
    {
      "code": 6008,
      "name": "SellDisabled",
      "msg": "Sell is not enabled on this bonding curve"
    },
    {
      "code": 6009,
      "name": "NotLiveYet",
      "msg": "This bonding curve is not live yet"
    },
    {
      "code": 6010,
      "name": "PassedMintCap",
      "msg": "Passed the mint cap"
    },
    {
      "code": 6011,
      "name": "OverPurchaseCap",
      "msg": "Cannot purchase that many tokens because of purchase cap"
    },
    {
      "code": 6012,
      "name": "BuyFrozen",
      "msg": "Buy is frozen on this bonding curve, purchases not allowed"
    },
    {
      "code": 6013,
      "name": "WrappedSolNotAllowed",
      "msg": "Use token bonding wrapped sol via buy_wrapped_sol, sell_wrapped_sol commands. We may one day provide liquid staking rewards on this stored sol."
    },
    {
      "code": 6014,
      "name": "InvalidCurve",
      "msg": "The provided curve is invalid"
    },
    {
      "code": 6015,
      "name": "InvalidMint",
      "msg": "An account was provided that did not have the correct mint"
    },
    {
      "code": 6016,
      "name": "IgnoreExternalV1Only",
      "msg": "Ignoring external changes is only supported on v1 of buy and sell endpoints. Please upgrade your client"
    },
    {
      "code": 6017,
      "name": "InvalidPad",
      "msg": "Cannot pad token bonding without ignoring external reserve and supply changes. This is an advanced feature, incorrect use could lead to insufficient resreves to cover sells"
    }
  ],
  "types": [
    {
      "name": "BuyTargetAmountV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "target_amount",
            "type": "u64"
          },
          {
            "name": "maximum_price",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "BuyV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buy_with_base",
            "type": {
              "option": {
                "defined": {
                  "name": "BuyWithBaseV0Args"
                }
              }
            }
          },
          {
            "name": "buy_target_amount",
            "type": {
              "option": {
                "defined": {
                  "name": "BuyTargetAmountV0Args"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "BuyWithBaseV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base_amount",
            "type": "u64"
          },
          {
            "name": "minimum_target_amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "BuyWrappedSolV0Args",
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
      "name": "CreateCurveV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "definition",
            "type": {
              "defined": {
                "name": "PiecewiseCurve"
              }
            }
          }
        ]
      }
    },
    {
      "name": "CurveV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "definition",
            "type": {
              "defined": {
                "name": "PiecewiseCurve"
              }
            }
          }
        ]
      }
    },
    {
      "name": "InitializeSolStorageV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint_authority_bump_seed",
            "type": "u8"
          },
          {
            "name": "sol_storage_bump_seed",
            "type": "u8"
          },
          {
            "name": "bump_seed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "InitializeTokenBondingV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buy_base_royalty_percentage",
            "docs": [
              "Percentage of purchases that go to the founder",
              "Percentage Value is (founder_reward_percentage / u32.MAX_VALUE) * 100"
            ],
            "type": "u32"
          },
          {
            "name": "buy_target_royalty_percentage",
            "type": "u32"
          },
          {
            "name": "sell_base_royalty_percentage",
            "type": "u32"
          },
          {
            "name": "sell_target_royalty_percentage",
            "type": "u32"
          },
          {
            "name": "go_live_unix_time",
            "type": "i64"
          },
          {
            "name": "freeze_buy_unix_time",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "mint_cap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "purchase_cap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "general_authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "reserve_authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "curve_authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "buy_frozen",
            "type": "bool"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "bump_seed",
            "type": "u8"
          },
          {
            "name": "sell_frozen",
            "type": "bool"
          },
          {
            "name": "ignore_external_reserve_changes",
            "docs": [
              "Whether or not to ignore changes to base storage and target supply outside of the curve"
            ],
            "type": "bool"
          },
          {
            "name": "ignore_external_supply_changes",
            "type": "bool"
          },
          {
            "name": "initial_reserves_pad",
            "docs": [
              "* Allow starting a curve from a later reserve/supply ratio of ignor reserve and supply changes.\n   *\n   * This allows for things like the LBC where you don't need to provide any initial liquidity"
            ],
            "type": "u64"
          },
          {
            "name": "initial_supply_pad",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PiecewiseCurve",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "TimeV0",
            "fields": [
              {
                "name": "curves",
                "type": {
                  "vec": {
                    "defined": {
                      "name": "TimeCurveV0"
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "PrimitiveCurve",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ExponentialCurveV0",
            "fields": [
              {
                "name": "c",
                "type": "u128"
              },
              {
                "name": "b",
                "type": "u128"
              },
              {
                "name": "pow",
                "type": "u8"
              },
              {
                "name": "frac",
                "type": "u8"
              }
            ]
          },
          {
            "name": "TimeDecayExponentialCurveV0",
            "fields": [
              {
                "name": "c",
                "type": "u128"
              },
              {
                "name": "k1",
                "type": "u128"
              },
              {
                "name": "k0",
                "type": "u128"
              },
              {
                "name": "interval",
                "type": "u32"
              },
              {
                "name": "d",
                "type": "u128"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "ProgramStateV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wrapped_sol_mint",
            "type": "pubkey"
          },
          {
            "name": "sol_storage",
            "type": "pubkey"
          },
          {
            "name": "mint_authority_bump_seed",
            "type": "u8"
          },
          {
            "name": "sol_storage_bump_seed",
            "type": "u8"
          },
          {
            "name": "bump_seed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "SellV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "target_amount",
            "type": "u64"
          },
          {
            "name": "minimum_price",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SellWrappedSolV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "all",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "TimeCurveV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offset",
            "type": "i64"
          },
          {
            "name": "curve",
            "type": {
              "defined": {
                "name": "PrimitiveCurve"
              }
            }
          },
          {
            "name": "buy_transition_fees",
            "type": {
              "option": {
                "defined": {
                  "name": "TransitionFeeV0"
                }
              }
            }
          },
          {
            "name": "sell_transition_fees",
            "type": {
              "option": {
                "defined": {
                  "name": "TransitionFeeV0"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "TokenBondingV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base_mint",
            "type": "pubkey"
          },
          {
            "name": "target_mint",
            "type": "pubkey"
          },
          {
            "name": "general_authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "reserve_authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "curve_authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "base_storage",
            "type": "pubkey"
          },
          {
            "name": "buy_base_royalties",
            "type": "pubkey"
          },
          {
            "name": "buy_target_royalties",
            "type": "pubkey"
          },
          {
            "name": "sell_base_royalties",
            "type": "pubkey"
          },
          {
            "name": "sell_target_royalties",
            "type": "pubkey"
          },
          {
            "name": "buy_base_royalty_percentage",
            "docs": [
              "Percentage of purchases that go to royalties",
              "Percentage Value is (founder_reward_percentage / u32.MAX_VALUE) * 100"
            ],
            "type": "u32"
          },
          {
            "name": "buy_target_royalty_percentage",
            "type": "u32"
          },
          {
            "name": "sell_base_royalty_percentage",
            "type": "u32"
          },
          {
            "name": "sell_target_royalty_percentage",
            "type": "u32"
          },
          {
            "name": "curve",
            "docs": [
              "The bonding curve to use"
            ],
            "type": "pubkey"
          },
          {
            "name": "mint_cap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "purchase_cap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "go_live_unix_time",
            "type": "i64"
          },
          {
            "name": "freeze_buy_unix_time",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "created_at_unix_time",
            "type": "i64"
          },
          {
            "name": "buy_frozen",
            "type": "bool"
          },
          {
            "name": "sell_frozen",
            "type": "bool"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "bump_seed",
            "type": "u8"
          },
          {
            "name": "base_storage_bump_seed",
            "type": "u8"
          },
          {
            "name": "target_mint_authority_bump_seed",
            "type": "u8"
          },
          {
            "name": "base_storage_authority_bump_seed",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "reserve_balance_from_bonding",
            "type": "u64"
          },
          {
            "name": "supply_from_bonding",
            "type": "u64"
          },
          {
            "name": "ignore_external_reserve_changes",
            "docs": [
              "Whether or not to ignore changes to base storage and target supply outside of the curve"
            ],
            "type": "bool"
          },
          {
            "name": "ignore_external_supply_changes",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "TransferReservesV0Args",
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
      "name": "TransitionFeeV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "percentage",
            "type": "u32"
          },
          {
            "name": "interval",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "UpdateCurveV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "curve_authority",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "UpdateReserveAuthorityV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "new_reserve_authority",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "UpdateTokenBondingV0Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "general_authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "buy_base_royalty_percentage",
            "docs": [
              "Percentage of purchases that go to the founder",
              "Percentage Value is (founder_reward_percentage / u32.MAX_VALUE) * 100"
            ],
            "type": "u32"
          },
          {
            "name": "buy_target_royalty_percentage",
            "type": "u32"
          },
          {
            "name": "sell_base_royalty_percentage",
            "type": "u32"
          },
          {
            "name": "sell_target_royalty_percentage",
            "type": "u32"
          },
          {
            "name": "buy_frozen",
            "type": "bool"
          }
        ]
      }
    }
  ]
}
export type PrimitiveCurve = Record<string, Record<string, any>>
export const PrimitiveCurve = {
  ExponentialCurveV0: { exponentialcurvev0: {} },
  TimeDecayExponentialCurveV0: { timedecayexponentialcurvev0: {} }
}
    

export type PiecewiseCurve = Record<string, Record<string, any>>
export const PiecewiseCurve = {
  TimeV0: { timev0: {} }
}
    

  

export type ProgramStateV0 = IdlAccounts<SplTokenBondingIDL>["ProgramStateV0"]

export type CurveV0 = IdlAccounts<SplTokenBondingIDL>["CurveV0"]

export type TokenBondingV0 = IdlAccounts<SplTokenBondingIDL>["TokenBondingV0"]
  
          