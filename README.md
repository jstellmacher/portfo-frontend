# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
portfo-frontend
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ f44295b799005c8404e27f1190cc2cdaa0afb8
│  │  ├─ 02
│  │  │  ├─ 49bc1070407f3a58d4aa3e80843cd563c1d221
│  │  │  ├─ 75e13b31698009adb78e3fddd4404b331889f6
│  │  │  └─ e16edfb422df066ce0dc6760719385b3e5a2af
│  │  ├─ 03
│  │  │  └─ c86d71da6cf6a3022d2b8d7077ffb0b071fede
│  │  ├─ 04
│  │  │  └─ 0d6ca3e45b0369a6f615c29932ce78a8e6dac4
│  │  ├─ 07
│  │  │  ├─ 535a6ca5cdf26f7a1d98a278ca1dd46d51fa8f
│  │  │  └─ bbceae34ffa63ab20615902c34f955559dd8d3
│  │  ├─ 08
│  │  │  └─ 703947bb3a3413a4f58d1506b2cd1504b5677f
│  │  ├─ 09
│  │  │  └─ c42b85aad1f3a7ef23a6bf570a581013ab99c3
│  │  ├─ 0a
│  │  │  ├─ 11c12aeb85c0634c4f53cf417e70677eb5f233
│  │  │  ├─ 2a43a3d703db570185f74b2531272e4e1ffcb4
│  │  │  ├─ aaa103a9219563635d1a7c47365099634aac87
│  │  │  └─ ef8c5eb84c55339075f7ff0c39d24136aa5ec8
│  │  ├─ 0c
│  │  │  ├─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  │  └─ ee0d6a4945a53f8dbf7b183ebaa7e313c75b75
│  │  ├─ 0e
│  │  │  ├─ 17f523e86e60835f06bd459eaed398475080d7
│  │  │  └─ 1bbeea49302e947b47cab5e56d3ff31ecacf0d
│  │  ├─ 10
│  │  │  ├─ 7901dbddd75f96dea77860f0eb6a0a050e1cac
│  │  │  ├─ 84abb844d9ca659a6896661484d0252b135700
│  │  │  └─ d620969b7fbe5c03d7947b96666ba0b118fb19
│  │  ├─ 11
│  │  │  ├─ 3c624f98381fdb082b2325410e63261ef4fbaf
│  │  │  └─ d56bc8afc332fbe92127d8b81c98e6c7929bd7
│  │  ├─ 13
│  │  │  ├─ 414b55b41e3d47e165e7be38763327aef92521
│  │  │  └─ 7bee4ea5397ff5bff5d257036f9806a1669a0d
│  │  ├─ 14
│  │  │  ├─ 51711b210a3e714d6140fb79d8b539bc7fdeba
│  │  │  ├─ a0c364d1fc460f2b7032c4478f23bcc02bb51f
│  │  │  ├─ bb235b85e1d1cb3cb6a7e5542fbaa31b7ab916
│  │  │  └─ d5097e7d5573b59c1a2a8128db7dfa5c11f6ca
│  │  ├─ 15
│  │  │  └─ 9d110bf85752d0fc038213d4eef503749c20e6
│  │  ├─ 16
│  │  │  ├─ 161c8773d2528bc39cb9b0568d95b969be6195
│  │  │  ├─ 704b8fa9baf43e320f829cea463e131e50d522
│  │  │  └─ 93ddc449d79b1f5e69c3008d52d50b1c8ed6b7
│  │  ├─ 17
│  │  │  └─ dded85773a6b3e4d1a32737145807c974a34ba
│  │  ├─ 18
│  │  │  └─ a69bfdaf3d9bce4ae322cbb71722398a64b6fd
│  │  ├─ 1a
│  │  │  └─ 50e2f65210c2a989d710edee19a5fcb29d3377
│  │  ├─ 1b
│  │  │  ├─ 31ad35d1b8e09e465ab639b4f230a1f69f4ec4
│  │  │  ├─ bd54914699a1879bfd1a24de06ec612473f39f
│  │  │  └─ fb96811f86f377ccc60cdbd5e1e5c2ace78747
│  │  ├─ 1e
│  │  │  └─ e1d500a15b17a02c1e8ac6491266418b39273f
│  │  ├─ 1f
│  │  │  └─ 90dc02ea40e6c583392a42cfd3615c947e37f8
│  │  ├─ 22
│  │  │  └─ 1985d87558cf859c82684d4af782f46252f880
│  │  ├─ 23
│  │  │  ├─ 0aa86ce297198fdeeced89ca42b990d58de438
│  │  │  ├─ 33d00952fff966cfa7f9a2463b92999d9bad9e
│  │  │  └─ e86aabed987fa3fb6a7d9149e8aa6a2f251050
│  │  ├─ 24
│  │  │  ├─ d19b9e3b926ef4dd8d83da0f11858810bf3228
│  │  │  ├─ e75cb0d5a0181c785f32a957d6ff1a6ea062f8
│  │  │  └─ f5c0ebaa58c2365cd9d8623e4de9fc07634df2
│  │  ├─ 25
│  │  │  └─ 1098b6a39800dab8f9dadbf4c5a13c17e26f9b
│  │  ├─ 26
│  │  │  └─ 36a2eda23df84c84ca86ef46731173589e29eb
│  │  ├─ 27
│  │  │  └─ 2c668f5fcdf99dc606cc6f8ec49afb7930b03b
│  │  ├─ 28
│  │  │  └─ 6693bb376b8b5fd4d7ee24716e8c3ccc9589e0
│  │  ├─ 2a
│  │  │  ├─ 24bddef7b02105c721fdd93c309a12b882a59a
│  │  │  └─ b667ea1897d08e760d548446c0ab96c5ea1194
│  │  ├─ 2b
│  │  │  ├─ 1f8f23a53e806d11c271894192081c84839c0d
│  │  │  └─ a84ad1c5f10826ba4b1f965144ede125829a4e
│  │  ├─ 2c
│  │  │  ├─ 5c77f1072edb7908ae03cb1de58aa76197fc21
│  │  │  └─ b72a4c2cf6bd582f66fb8ed6ad0fce505fff96
│  │  ├─ 2d
│  │  │  └─ 813cf663127f81633ac47e4279e87ef39f30d2
│  │  ├─ 2e
│  │  │  ├─ 7af2b7f1a6f391da1631d93968a9d487ba977d
│  │  │  └─ d1a38f509434aa55f4e5aac595665c143ead7d
│  │  ├─ 2f
│  │  │  ├─ 27e0084ad06205cfbaf8e5e8383a2377c70cad
│  │  │  ├─ 8b1269544557ab7877c8c46dc26434b8bc3e23
│  │  │  └─ f67db28961224449c067c0458e553ecf77727e
│  │  ├─ 30
│  │  │  ├─ d9177678d4e208fee8456d776925289c7341aa
│  │  │  └─ f3664eebf89918fa638ce07085cf9cfd6112a6
│  │  ├─ 31
│  │  │  └─ 46af8750dadbac99c1d45a443cb4576bd562ce
│  │  ├─ 32
│  │  │  ├─ 13346467ca6cbb35875f91779106c7b4f1c295
│  │  │  ├─ 9ba50d30c6188343f2363177592d8a7cd3041c
│  │  │  └─ f18bf7e3b60822cc42b7772ea42c3bdad86fb3
│  │  ├─ 33
│  │  │  └─ dbfa96a601ce90a5917fa5c96d50ea00a6f795
│  │  ├─ 34
│  │  │  ├─ 634aaf9a041fa7c240c20c553a4cc17a5a10a1
│  │  │  ├─ 97efd0853cbc6ddc37e8c71b5c33bea51dffc1
│  │  │  └─ 9f22fff1b065cdd0cdc62796c5ffaa8d6babda
│  │  ├─ 35
│  │  │  └─ a79457a8af71eb4133b3624e0233976e8ac178
│  │  ├─ 36
│  │  │  └─ 655c5cb30fdb1460e7d39927555dc389e3db57
│  │  ├─ 38
│  │  │  ├─ 2b434c1492f320600dda347c823d70342317fd
│  │  │  ├─ 5eb65df9710d2083719a6f089e2ade7144aa38
│  │  │  ├─ 73de99cfeb2ebad1968eeacf3a45486f86a854
│  │  │  └─ f412bf28f9cccb56b0281f4712aed99dfa30d9
│  │  ├─ 39
│  │  │  ├─ 2c8a80c8fec4a5fab1d86b0f9f858a1883dcbf
│  │  │  └─ 9f0298142e8a95371421cd23f32486d7e18dbc
│  │  ├─ 3b
│  │  │  └─ a1f9ca72043bf29802d5908bcb686936564e67
│  │  ├─ 3c
│  │  │  └─ 52abc24adcc140e15afac7d1cbf79e2b2250d9
│  │  ├─ 3d
│  │  │  └─ da632573af85cdb5e2d37c0cb7752754c8c202
│  │  ├─ 3e
│  │  │  ├─ 212e1d4307a332e8511f530bc48a4ad5ed6f95
│  │  │  └─ 7fd3b5735c4181d5b9f20823a7976337bc9591
│  │  ├─ 3f
│  │  │  ├─ 22fe7070a364ffe3b0f88172a70d2faa60b48e
│  │  │  └─ d2834c4f4c6763a6f8918f077353343bbca532
│  │  ├─ 40
│  │  │  ├─ 237e15c05cca2035299df5ffb01f642a3cefb3
│  │  │  └─ ada8f91f95d25f7efb428e88fc98e32cb0430f
│  │  ├─ 42
│  │  │  └─ 3b4cfe7ab09470eaca04a19dede6cb52cf7614
│  │  ├─ 43
│  │  │  └─ 4b852c7e7277c982ea04868694ac16bbe941f3
│  │  ├─ 44
│  │  │  ├─ 0f893ed087a61955a68191d57565100a4734bb
│  │  │  └─ ab7199624c770b83a4e526168ebae14818e3f6
│  │  ├─ 45
│  │  │  ├─ 2b1bb126a6b9699fb430948896e6af19595b36
│  │  │  └─ fc12e7e5f48171b10db335485f999f64ae6ff5
│  │  ├─ 48
│  │  │  └─ 1d49fc559ecec13134c310f21da2170992a982
│  │  ├─ 49
│  │  │  └─ c70d8e6ff3998cc12bb654436e485c611f5a02
│  │  ├─ 4a
│  │  │  └─ 6de44187880d8fc9fe796d246326f3ed1bad41
│  │  ├─ 4b
│  │  │  ├─ 1a0124bdbf27d7e52018326d737ba5d2da0516
│  │  │  └─ fd245f776df6f8933457d80398dd3f010bbade
│  │  ├─ 4c
│  │  │  ├─ a087a2dff6a064aab2727d60d353c4c5dd75cd
│  │  │  └─ f52e09abad2baef094882470bf55530147f331
│  │  ├─ 4e
│  │  │  ├─ 72c7783a890e8a4f79a8ef804b2c0440a2b9a2
│  │  │  └─ a40279bef49880674359ca4ea222b94e1f66e9
│  │  ├─ 4f
│  │  │  ├─ 242a0bb7633b44cb863c7c9468d23370737de7
│  │  │  ├─ 654c83a48a5659187f787bbcc6582cccd3ab7a
│  │  │  └─ a2c7b8b5d827d049635975238eb2b11898d2e7
│  │  ├─ 50
│  │  │  ├─ 26e82fb3418dd7193d2803ea5593fe47665690
│  │  │  └─ 77c9c2b727ee1f88cbbe1e28350a8f056afe34
│  │  ├─ 51
│  │  │  └─ abbed2feb18740c3ac4d58ac1bf43e187be199
│  │  ├─ 52
│  │  │  ├─ 15cbf37c573db4623e26377f4541fbb075ff75
│  │  │  ├─ ce6db8fe14bf9a0690554405b8458133f4775e
│  │  │  └─ fdc79888deab92f1e69ada02ff90efd199fa33
│  │  ├─ 53
│  │  │  ├─ 421db4096c30931abed820a0c71b8bf906aab1
│  │  │  ├─ 700b3cfaa3780ca7438dca7041a102942cd1d0
│  │  │  ├─ ae2a36ca2d515f9885adfd36fce03f9117cbfb
│  │  │  ├─ c506702adf65719880fadc293dc4d6a0607fb7
│  │  │  └─ cd06cc66f3a4a3dcc9384d09bfe151ae791cb2
│  │  ├─ 54
│  │  │  ├─ 2630bbcea65a7fa5d17aab08766f59abd3223b
│  │  │  ├─ 5a7387921ccadba9c2d9ebf2fd071bb203b635
│  │  │  ├─ aab96fcb17cdcc78f1fcc92e182496ad10c257
│  │  │  └─ b39dd1d900e866bb91ee441d372a8924b9d87a
│  │  ├─ 55
│  │  │  ├─ 18cbb81eaf38ce208a02130cce6e1f307f1412
│  │  │  ├─ 5c8b79b74d25dc051162676d0eba3ae23cb5ce
│  │  │  ├─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  │  └─ deca134434fc7f59a9c08f6c9047f1a56f78ae
│  │  ├─ 56
│  │  │  ├─ 15df1ac66c8b076e4d7e3d32c6857529f09755
│  │  │  ├─ 5d5b71de62c03a5c78b4db2e590cc7a9259d8a
│  │  │  └─ c8de6894ec869a718ba4f63fbd5be5531dc7cb
│  │  ├─ 57
│  │  │  ├─ beaa97a24c692d5eefe53c971c21a40d4cf51d
│  │  │  └─ d12bf5988906ad48265996328f139d28c7d1dd
│  │  ├─ 58
│  │  │  ├─ 6ae0c865b876bcff4f28e8421c6e261a5c79db
│  │  │  └─ fbc6c68186debd6a57e2e5c6effbdb1616a902
│  │  ├─ 59
│  │  │  └─ f9cbe614b1f31ef9612460ac5fd9d63c36e2b9
│  │  ├─ 5a
│  │  │  ├─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  │  └─ 520d1c7ca3fa1ee5aa50e4a75be4390f415299
│  │  ├─ 5c
│  │  │  ├─ 467121c7a911ddf3b821ddc4f2d9109cada5a6
│  │  │  ├─ 4f139220d05746c32ff6f9aac50a2582a2ed76
│  │  │  └─ b253b3d822d818b35a12ac21c8ca56520a9668
│  │  ├─ 5d
│  │  │  └─ bcca00198b9329fd02857dc06050e34a0c4bd3
│  │  ├─ 5e
│  │  │  ├─ 0b7c7a18cca03d41218a8c3250b7ad434901f3
│  │  │  ├─ 108326589000d03b2c5310912686e25e01f614
│  │  │  └─ f7ba6ce9e36357c1e999fcd9981e7692cd7f5a
│  │  ├─ 5f
│  │  │  └─ 16f4dc7634107d656b3ba438c9fad05d77bd84
│  │  ├─ 60
│  │  │  ├─ a659625c4bcfaad8495036a32de1d82a3be758
│  │  │  └─ b43271a5941849592aed42c12232ded64b0687
│  │  ├─ 61
│  │  │  └─ e5278eaa43f34924f21279ca21af66acdf0e02
│  │  ├─ 62
│  │  │  └─ 939b4d7411fde8950b04a5bcda3f085d69b6c8
│  │  ├─ 64
│  │  │  ├─ 86d568aa6f599f287f65f9951c0f93d3fb9dda
│  │  │  ├─ af4b31e2b68638949645edbe009c15f377e689
│  │  │  └─ d01463170eec9cd91147420289deeda664c687
│  │  ├─ 65
│  │  │  └─ fc721f1372fc33e285ac45f3ddbdb15d330ec0
│  │  ├─ 67
│  │  │  ├─ a2b225fcf74f5c73aaf28f2734f153a876554f
│  │  │  └─ f386f509b0aa266db93f32f783ddd35e27c387
│  │  ├─ 68
│  │  │  └─ 798a22342ecad423988e82ebc70625e1ee24a3
│  │  ├─ 69
│  │  │  ├─ 9572bbde369ae7277f5e621fd8435c351aac64
│  │  │  ├─ aaa1a74a4139a97521ad2392405b291cbb746f
│  │  │  └─ b92626b1b63e4507ae89b3f4a6610dd5f17a8d
│  │  ├─ 6a
│  │  │  ├─ 6a6cd37b8ac9a416b4e50afacb75279387135e
│  │  │  └─ 866b7c9e298038c3a02419354f1a2b0f035f50
│  │  ├─ 6b
│  │  │  ├─ 93aa552120db83812e9f26111bd1101e625336
│  │  │  └─ f1fc3462f4221327381db88b09dab97b2882d4
│  │  ├─ 6c
│  │  │  ├─ 87de9bb3358469122cc991d5cf578927246184
│  │  │  └─ c5fd74560f70ce34b84167237a002692306e48
│  │  ├─ 6e
│  │  │  └─ f32c9683f84ce2c87304ba3edf9279b3bf10f1
│  │  ├─ 6f
│  │  │  ├─ 3af2d7b31e7ad25f6c893d8fec4daf7ccca6fc
│  │  │  └─ c94670d48a90e2e48da0de3486a7774a6904be
│  │  ├─ 70
│  │  │  └─ 9258d354e4b5e8c1d99f27f0385fa24f753dfc
│  │  ├─ 71
│  │  │  └─ fcb57e9155d3c0399c8a4efbc106e7400e4ff2
│  │  ├─ 73
│  │  │  └─ 6fe0d112ff5cc07ca89ec615f4e3af629ba6b2
│  │  ├─ 74
│  │  │  └─ ddad7711329168c236c9dcaaf22149a4739884
│  │  ├─ 76
│  │  │  ├─ 463e0c2995fdeddba004e30fc27e326c21a98e
│  │  │  ├─ 5bbb1b83ee31d44accb95da68408ab37fd32ef
│  │  │  ├─ 83584b77a2af7bb5703ac55f6424e2031f3da7
│  │  │  └─ ccc5bfbcb3bffcb44feee2912a7ffc783ee568
│  │  ├─ 78
│  │  │  ├─ e620eafd91e8fa40ceb3298eebbf6e532bab2d
│  │  │  └─ ed21d14ea6fa17de9037585fd36b1a405b374d
│  │  ├─ 79
│  │  │  ├─ 015fe8b0aafb0671ab2307c782abfc10d2d479
│  │  │  └─ 9d4df924dbac2c4e74c98ebba15076a48691dc
│  │  ├─ 7a
│  │  │  ├─ 7fbad3223e41f3441b1fcd7da4298a14b1bfae
│  │  │  └─ d96a0229383a983af4fb26df516647fbaa6091
│  │  ├─ 7b
│  │  │  ├─ 514021164938eed84594cc218719d79e8088b2
│  │  │  └─ b9eecb83a87210cec0e84fc7cbdbe9c1bc4b56
│  │  ├─ 7c
│  │  │  └─ e500ab3a2e4c46d3a428703066268174437da4
│  │  ├─ 7d
│  │  │  ├─ 737beca17b7dc63f688c0ecf022c444d013608
│  │  │  └─ d1a6236a1dc4cab845628daccb76dca0f4decb
│  │  ├─ 7e
│  │  │  └─ 7d62ef89768464fbac57134de7439d59037304
│  │  ├─ 7f
│  │  │  ├─ 3ed555faaa2408b7a7ea91fcf107fb39f9d003
│  │  │  ├─ c01b7a675cd12f0f8df01e58d49c8e841ebba1
│  │  │  └─ d213e9bc975bb5b881722e229619677e9621f1
│  │  ├─ 80
│  │  │  └─ 02a9ee3848797112a093f8ea4b162383931a19
│  │  ├─ 81
│  │  │  └─ 81e5ab75dfac762a4e5f2a19a8b8e75739fcd2
│  │  ├─ 82
│  │  │  └─ 7dee6f8e7073fb4ae436da813d7c7d3fec9ca2
│  │  ├─ 83
│  │  │  └─ 20809d98f1dee045d7984d2546468a84150191
│  │  ├─ 84
│  │  │  └─ 0d7027747856e58e2c502ee29579710340fc41
│  │  ├─ 85
│  │  │  └─ 823e94c7d8147dbd77d14284a213059d0c7475
│  │  ├─ 87
│  │  │  ├─ 22a06b47c2e3983e2d07fdcd9f521cf2209d14
│  │  │  └─ 3f2397125754a3ade66c5fc5f2cfe126942d1c
│  │  ├─ 88
│  │  │  ├─ 96d4b26ee3252e7aa77cfd14386a01fd511e1f
│  │  │  └─ ba955cf8af0aa0cd4d9f1f41d998273aa882ee
│  │  ├─ 89
│  │  │  └─ a69445c774beb5006465234ea9caef72f63bb2
│  │  ├─ 8b
│  │  │  └─ d9ff414844b08fac73afe6260d2afabe8be405
│  │  ├─ 8c
│  │  │  ├─ 2276584a79b4ab11853d48c630078df90ef64f
│  │  │  └─ 489e9cade0eedbef15d38d2c41c55f120e7147
│  │  ├─ 8d
│  │  │  ├─ e02ef5e4d9b72149db1d7a45b1cc89a8a7cd4b
│  │  │  └─ e98b4832f2341271f33204e988219ea1a855cd
│  │  ├─ 8e
│  │  │  ├─ 3344ebe9e3de161d8efd0ea1f3ae5813a4d5e1
│  │  │  └─ fc8483152761b1c4ce766e3f1cb2b3f1ce23ad
│  │  ├─ 8f
│  │  │  ├─ 6c86ad220ce6461f16cf75dd38f1c6a55f751f
│  │  │  ├─ a48e9a04f1215e0b39a5f095bde097cd78e17b
│  │  │  └─ d6d4e5d5b2af5f6ec055df72391d0d603e4281
│  │  ├─ 93
│  │  │  └─ 9c69327b2c58e70d93100e31ce81bc7d4bbebc
│  │  ├─ 94
│  │  │  ├─ 11f53eab73da8bdf9d65a1b175a10fb124165a
│  │  │  ├─ 462e3aa9fe8c9d6a4e1a1164971e3735105181
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 95
│  │  │  └─ 20071ac2d7a4b20a419b423e958bd254f1fe97
│  │  ├─ 96
│  │  │  └─ 1e76cf5d13fd37b983fbdd4fbc6e68be563981
│  │  ├─ 97
│  │  │  ├─ 4e6a4147642901ecd067867d6627d0c47875c7
│  │  │  ├─ 6f2c61982b70844adb49809af558555f0ccd84
│  │  │  └─ 87b81bc7253e780fe58129eae3b6e408e88f75
│  │  ├─ 98
│  │  │  └─ 2e00c6b4bac45ae7be3a9a8a06852fb4300fb5
│  │  ├─ 99
│  │  │  ├─ c6f126a9baef34db7a6c9fdd4d1d3f3852fda4
│  │  │  └─ f4a68f85ffb9b592d14e2f4ebe75b28c5e0703
│  │  ├─ 9a
│  │  │  ├─ 01b1ea7dcac6d29c76aa5660c96047face3fd8
│  │  │  └─ 2f276290a7f62ce619d71b95ee9372dab7da58
│  │  ├─ 9b
│  │  │  ├─ c5e13f82342111e4d5880f1c63ffaa026cc814
│  │  │  └─ e98b63d6da2fc4dadd78e8c0fa6cb46930d1ac
│  │  ├─ 9c
│  │  │  └─ 197f61bd018d88b81c6171bdafaec8469826e3
│  │  ├─ 9d
│  │  │  └─ f355d666a9b47cb5ce8363e59b224148d2cd5c
│  │  ├─ 9e
│  │  │  ├─ 4a2aa39bc5a288764614a84009d25d3f500989
│  │  │  └─ d181627cdac2bc2586e42d6f1353f7980d025c
│  │  ├─ a0
│  │  │  ├─ e2899607fb96a0b1c1978dcbaa9d0737c78d01
│  │  │  └─ ecc02da3d32caf1e5af38839a04c861554e116
│  │  ├─ a1
│  │  │  ├─ 7847c7e121f131eb9a3e6074364066ec731d93
│  │  │  └─ d89b96ce3a671d0f37bdab1c100fc51b0726c9
│  │  ├─ a2
│  │  │  ├─ 600d3a9a04e614e2cb9473c98e0499187b044b
│  │  │  ├─ 7a21133654185b36c556aec7b10056a8a5992a
│  │  │  └─ f96e62a1b46c31e463bf08e05eb7f0a5024fa7
│  │  ├─ a3
│  │  │  └─ cb3593c24a854f6b6651af56f79c8e66f274df
│  │  ├─ a4
│  │  │  ├─ acc648e981d2f636cf82f488853c5d217c2d34
│  │  │  └─ e63f33930f3f596cff1897917c513f7a2b9a0b
│  │  ├─ a5
│  │  │  ├─ 1c0363108c562c0387532634870966622996c3
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  ├─ 0a7c526d92c03f3a4d5c4105787f07eede47e9
│  │  │  ├─ 16f56e06679ac5ac0b661e0e0561fdd366e8f5
│  │  │  ├─ 3a01b13edfedd08f811c4d8872e4ea797000ef
│  │  │  └─ ae8bf9c4e20354e8d592439f580a4b728219b4
│  │  ├─ a7
│  │  │  ├─ 6de7a8282353e874592c9f7a3f773b136baef7
│  │  │  ├─ ea8187bc43539d4295b2aacd2ea8baa6088d27
│  │  │  └─ f5a349500d26ab6fc572623e6c3eb59cfd0630
│  │  ├─ a8
│  │  │  ├─ 3f89f340d90e9e184682c06a7a877b1f42dc17
│  │  │  ├─ 91f25d13bedd5e2437d93d9665c9e607239668
│  │  │  └─ db441e882f5f707bec3b86007c21ebc1854f19
│  │  ├─ a9
│  │  │  └─ 65200817b109f5362af4c0a82abe6014f62a02
│  │  ├─ aa
│  │  │  └─ 0c6a68f918083b2c577d2b53c0b26505c0bc17
│  │  ├─ ab
│  │  │  ├─ 344a3120e9a6cb64cf0f4fe8e70df48383f4d1
│  │  │  ├─ 40d8331aeab1dbf451e6d9667c406d16183327
│  │  │  └─ dc9a95e133472d126d4de820b3fcfc09b3dc80
│  │  ├─ ac
│  │  │  └─ db9264cf76b749022707e452d70768c9d94a57
│  │  ├─ ae
│  │  │  └─ 6486e7bc254a8baf37f7d14c94cc8da96e7be3
│  │  ├─ b0
│  │  │  └─ f7d0ad6e299bd015ca6555841b7551fe3757d9
│  │  ├─ b1
│  │  │  ├─ 3b7be1e5f13a2e8f9629349f4c0cb7ff0bfeae
│  │  │  ├─ 890ca45a3e255083e04e072aef1c86a99c256c
│  │  │  └─ ca46d036f14e679db7c9aa007c1dc21711e77f
│  │  ├─ b3
│  │  │  ├─ 8acb2520d7ff57bca46bdc84b4833be21d2ab1
│  │  │  └─ f5a03afcb4c169e71a778c226c154976c7682c
│  │  ├─ b4
│  │  │  └─ 1d1a813c948a58f525bba5d8d96c75917d79c5
│  │  ├─ b5
│  │  │  ├─ 2ed77394269220b172be2389618fdebbfd1387
│  │  │  ├─ 5278f5fac01149a9cdfba64e226b92f9ced6db
│  │  │  └─ af10f7e030a965bcb97b22bb3a3295671bf12f
│  │  ├─ b6
│  │  │  ├─ 0e27c97c284692c63542782b8e7c3d3d9d998c
│  │  │  ├─ a18d50aab7a0a17bd1ab1372915ebb3f583b9c
│  │  │  └─ f9ea156f0c358c152f1adcae718b8ade9f2187
│  │  ├─ b7
│  │  │  └─ c43f9bcfe98812639c522e36fc737816ad074a
│  │  ├─ b8
│  │  │  └─ 3a9aa7f966a149efec317c7f068e63821b5971
│  │  ├─ b9
│  │  │  └─ bc580472729e2320f04a04e39bd0dbe8757cce
│  │  ├─ ba
│  │  │  ├─ 95fc6e6fb81f44428ad7fec7dfbf29b8cc4e6e
│  │  │  └─ a4e00d42aa76e7916c580dc4a2d70c61028d1a
│  │  ├─ bb
│  │  │  └─ 2df0faa9f73ae1feb591f46fcfa13223f2c893
│  │  ├─ bc
│  │  │  └─ 4adb6136fddc2793e677c3879d780d02ef8ca6
│  │  ├─ bd
│  │  │  ├─ 59952ed7a347d173ad4bd99ec04e11b51f3cfa
│  │  │  ├─ b2d5f68ce036e0b665f4acd75fefb5c823daea
│  │  │  ├─ de975519225449bf20c687ef4fc1a50f13e31f
│  │  │  └─ f8d34b78b47897e22eb58ad0257a48d57102b0
│  │  ├─ c0
│  │  │  ├─ 4b49fbd1bbd84bfbfe9c5eabca3a8b97bd2229
│  │  │  └─ 7b06da894b98b73ff526fb28edea39f63e9b15
│  │  ├─ c2
│  │  │  └─ c59b499d9d21716497ca6da37541efd27111c3
│  │  ├─ c4
│  │  │  ├─ 156cab428acc79798eaf64bedfd703fdc5c1c3
│  │  │  ├─ 66d44fbc99856acd1ea06b78fe1e402b16198d
│  │  │  └─ b90913ea4ce2e1acfe9e24ac37b8fd137cc397
│  │  ├─ c5
│  │  │  ├─ 55181f84da94b7c2f7771567e5988d3ae1d21f
│  │  │  ├─ ac19349662d6b4479c775ee7d882c684bd6f3b
│  │  │  └─ d4b85a8dfca42b837fcaf98fd15968ba69f136
│  │  ├─ c6
│  │  │  ├─ 10cbba43ba455aa69e49b906237d54f0e03ee2
│  │  │  ├─ a2578b5023ae424a07909a49f6b7d18721be51
│  │  │  └─ ec85f109f1a4838a79bde1c1e1190c593bb8af
│  │  ├─ c7
│  │  │  ├─ 79d7b68f23443e3d661c651e10454514f3ba27
│  │  │  └─ e8c961845fe317dba15d0f09c69c3a071c08c6
│  │  ├─ c8
│  │  │  └─ e69de5ff500c0713533116a57ea45af3ae684b
│  │  ├─ c9
│  │  │  ├─ 5eb2114d9dc505de505324c93bb0a002f2216f
│  │  │  ├─ 839bc90424e3671b9999852de3dfdc1d02ae7c
│  │  │  └─ 9f5b12d5d0e4cc93fbb85b834abfdf22887283
│  │  ├─ ca
│  │  │  ├─ 5147a8ba754b0b2874bf545e2c8a623c0261b9
│  │  │  └─ d37fd7941d9d78816ad7167642cd4ec6a5bc02
│  │  ├─ cb
│  │  │  ├─ 9a0401dfadae9fdcee032da05132d687e2ef30
│  │  │  └─ a2c659feb64e2e86fea29d60e516584521aeee
│  │  ├─ cc
│  │  │  └─ 51b60d2e60ab14a230e301e6138555e334d8f2
│  │  ├─ cd
│  │  │  ├─ 19af0eacd75fb31e937002c9312817a1fff80a
│  │  │  └─ 8b068f27c125e67bdc7ee79e73f6ae0d7c6928
│  │  ├─ ce
│  │  │  ├─ 176a57e676fa888a7f527b4c8962285b76d878
│  │  │  ├─ 1814499c30e357fa4a95bef8c1aac1adf480e4
│  │  │  └─ ff6bddf900040c2b0d54d6e2665c01d6dd751a
│  │  ├─ cf
│  │  │  ├─ 12cd5b29ebd170ec1071809223eb38dc317a8b
│  │  │  └─ ac7e1320af9cb29d53de9018122dab8dbac445
│  │  ├─ d0
│  │  │  ├─ 3e835e340ca084ccd8f7ae379cb974976ba2eb
│  │  │  └─ 741daf5fd397c84c88a99f94449c77451492d0
│  │  ├─ d1
│  │  │  └─ 9aa246ffa02d3b460a29cdead0b7ac20c5844f
│  │  ├─ d2
│  │  │  └─ f99e8dff23507ad7365634d6c52b9007bc82df
│  │  ├─ d4
│  │  │  ├─ 0b664676385b5c915bae1e586069458eeb05ae
│  │  │  ├─ 7f4ce9986c6671f6961238fd41672a18e1efbd
│  │  │  └─ ede5aa205f3f3c9cfaa267062997779fec0803
│  │  ├─ d5
│  │  │  ├─ 0a65003f772786de1d4a6bc42e1d3376f820ec
│  │  │  ├─ 2e729fc818cead304e071b0d6001f975d3132e
│  │  │  └─ 7d1970dfceaab937bcf08f4551ad1995edff8d
│  │  ├─ d6
│  │  │  ├─ 015411d6c04c97f2d09c2fb4f27afef677de95
│  │  │  ├─ 6ae5330f62a9c4140eca5d3027d7b79d50b92e
│  │  │  ├─ 6b8820f9999cfa51db71bc76e067b5d1cfd46d
│  │  │  └─ e6f99e9c9c94dc008240a13fb5f05724322350
│  │  ├─ d7
│  │  │  └─ c62a360c1bb863e4d83a71c740536df8aaa39f
│  │  ├─ d8
│  │  │  └─ 5038c3d982ea50262f2b547384009762ef3bbf
│  │  ├─ d9
│  │  │  ├─ ccb155cb7620fc0515426756b37ff4beb12ecd
│  │  │  └─ dfc698162f6739940c1a9f49da894a6c58de5d
│  │  ├─ db
│  │  │  ├─ 72adf2558964111b9e4a0538887f60be1bb0b8
│  │  │  └─ c5e0ed871732936774aa500725eeab7d745cdb
│  │  ├─ dc
│  │  │  ├─ 967b35b784e5e183e49ce3b01457be1d6b6b89
│  │  │  └─ b1bd81516f8079a9fbc3f8c8087b5a5e3715a0
│  │  ├─ dd
│  │  │  ├─ ba9e94da6b348ebacd47c6459425c40591b849
│  │  │  ├─ c85d8d56a9c641bed7d2ccdd8837f3aa3f2394
│  │  │  └─ c9a36e59165449315c3cb5fc2717acd77f4dff
│  │  ├─ de
│  │  │  └─ 225a33abc9b9b12c3a7dcae4c04c6b04a937b4
│  │  ├─ df
│  │  │  ├─ 7e86f0117bea6a56eb80bf131ca72fc0289dba
│  │  │  ├─ 9e0f7f123141d0e586119f92aade3466aa439b
│  │  │  ├─ ca77de615f3983756af8d7703bdc5211eec2fb
│  │  │  └─ d9fd0ed3911cab1e9536f6e3eb4904fa754455
│  │  ├─ e0
│  │  │  ├─ 82cc6be8d2a68aceaf71f38124f07036f4420a
│  │  │  ├─ b55c9141a7eedc540f3fd6d635b98cd4f76a81
│  │  │  └─ b7d600667af2d5393f441257ddfd02c3b3388c
│  │  ├─ e1
│  │  │  └─ 74402ba5b1ffed669c37ea3ac25aca65bf82f5
│  │  ├─ e2
│  │  │  └─ 94b56a6dafe920b868cccf37d1ab2d556e5dd4
│  │  ├─ e3
│  │  │  └─ d1617e9ff567e613a62cc97c2cca972431dac9
│  │  ├─ e4
│  │  │  ├─ 6f27fefd124496f668db6250c27af26079143e
│  │  │  └─ a32908dbceb76f132266895edca989d136090d
│  │  ├─ e5
│  │  │  └─ 65282f396c16dad14427dc199a8c992cfda11c
│  │  ├─ e6
│  │  │  ├─ 2fef109cfabd931792d77e99892cfacfb8d4f6
│  │  │  ├─ 6994bc67b400862795e91f7699c8fff7aa9333
│  │  │  ├─ 8dcd26ba78e9182ec7c42cce41e40d643971cc
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  ├─ aae987f91896f826b49388e70bab0cea818182
│  │  │  ├─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  │  ├─ bbfd4caad3ede0972cd9f691342fe8d21e46e4
│  │  │  └─ ec55510cbbf92179cb27c1231cbc24570b4f52
│  │  ├─ e8
│  │  │  ├─ aecf7826668877ee8d0ab2984f5b3a6eb730b1
│  │  │  └─ eb41fa0b10adb0695f1929aa7c36e282bc200a
│  │  ├─ e9
│  │  │  └─ f368ec09c55f2c15dca93d009f63018848e2c1
│  │  ├─ ea
│  │  │  ├─ 2a3196e7d6f0d9868702839419fa875e61603b
│  │  │  ├─ 403471b6c398358cbb90015741304446ddd064
│  │  │  └─ b853c1b30527cae35c2f62dd53e88cd4a96896
│  │  ├─ eb
│  │  │  ├─ 27d6bf7b9c12c065c74221f85e81c8eccc414a
│  │  │  ├─ 5bfe967b9a20c8a56ba4b26624bf07eb291254
│  │  │  └─ bb48be67648d320393df528c6e57b3c8eead21
│  │  ├─ ec
│  │  │  ├─ 0a88c647f9b32d270395454fa4645c6c39253a
│  │  │  ├─ 12de9094ab0e960e6dd6243197a10bbd482749
│  │  │  └─ 72e2aa0dfe5d50670fd687cd5a53bd6596f27a
│  │  ├─ ee
│  │  │  ├─ 12698ed20c067ed86ef2479cc2bb7707efe797
│  │  │  ├─ 411652a6f94046dff5e6ce27e5ea5b9dc69437
│  │  │  ├─ 42d3c89c806741589643b7e8e6d9109645a915
│  │  │  └─ f896c7e7fa51ac23ed28ef331b024e980b60b1
│  │  ├─ f0
│  │  │  └─ 25984606c545710353ad278c8187fb3ab874fe
│  │  ├─ f2
│  │  │  ├─ 30ced0f14454a5bedc8a692a26a2c53b4d4cb2
│  │  │  └─ 64968bdda253131ae5f9126392aa5ba6a3ac56
│  │  ├─ f4
│  │  │  ├─ 0c0f9e15b0cfbe7aa9b4065f059fd10a0ddbac
│  │  │  └─ e047307a5a93fe19663fefd226b107831fb579
│  │  ├─ f5
│  │  │  ├─ 2e1ecd17f1501cd4a7b4afe52e7d68fe82f4c0
│  │  │  └─ 7c8eebb7802fc1aa67ce4cb7d5708c737ac54f
│  │  ├─ f6
│  │  │  ├─ 31a75816231ab7f5488ee85870738cdc510f9a
│  │  │  └─ 3f0cc97c6f9f7bdf91687ed9dd095a6200df4c
│  │  ├─ f7
│  │  │  ├─ 614016fd56a6dc148b1e4ed0ac15667f16c3f3
│  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  ├─ f8
│  │  │  └─ d85da9ed71fdb79b6b545db797cccd2e27c789
│  │  ├─ f9
│  │  │  └─ 0acd57cf8cdeb57351e623c55cb723cbf1d8aa
│  │  ├─ fa
│  │  │  └─ 7db534073190bd9afa39082906aa2587992a3c
│  │  ├─ fb
│  │  │  ├─ 18ecd4d41cb901922b2d0b647a6705232d362c
│  │  │  └─ 7fc5f3b23bcd633b5e9843592ed7a80049d3bb
│  │  ├─ fc
│  │  │  ├─ 02531e6d4a265573d13d6db2ab841d05c824fa
│  │  │  ├─ 03afa54ac82b1b1adc84cdfedf54647dff4cd5
│  │  │  ├─ 64731ca7cf7bf07b2e1870dfe3cfa4b4d82077
│  │  │  ├─ cd5bd8dc3737283f43698125e2fe718fd68f88
│  │  │  └─ d8589555af23fc06cd6db8937740a391db45aa
│  │  ├─ fd
│  │  │  ├─ 400575a693a125a8e5015b9adce29abba92569
│  │  │  └─ 94497817cb1e0d063e1c6f56af7edfb7b2ec48
│  │  ├─ fe
│  │  │  ├─ 7723fca3a25ca885a0102faff98c3a722b0d81
│  │  │  └─ ac5f770da4b642086018586d8078d93ddd4744
│  │  ├─ ff
│  │  │  └─ 421e46923a92570bd919b493b703bd03a4e2e0
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ Jai_picture-removebg.png
│  ├─ lol_Jai_dumb.png
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ AboutMeSubnavigation.jsx
│  │  ├─ AuthContext.jsx
│  │  ├─ BlogAPI.jsx
│  │  ├─ BlogFilter.jsx
│  │  ├─ BlogLayout.jsx
│  │  ├─ Button.jsx
│  │  ├─ CareerHighlights.jsx
│  │  ├─ CertificationsCard.jsx
│  │  ├─ CollapsibleNav.jsx
│  │  ├─ CollegeSubTabs.jsx
│  │  ├─ EducationCard.jsx
│  │  ├─ EmailForm.jsx
│  │  ├─ FeaturedBlogPost.jsx
│  │  ├─ FeaturedTableau.jsx
│  │  ├─ FileUpload.jsx
│  │  ├─ FilteredInterests.jsx
│  │  ├─ Footer.jsx
│  │  ├─ FuturisticBackdrop.jsx
│  │  ├─ GetInTouch.jsx
│  │  ├─ GoogleDocViewer.jsx
│  │  ├─ Header.jsx
│  │  ├─ HomeSubnavigation.jsx
│  │  ├─ KeyQualificationsCard.jsx
│  │  ├─ LearnedTabs.jsx
│  │  ├─ Login.jsx
│  │  ├─ Logout.jsx
│  │  ├─ MainLayout.jsx
│  │  ├─ Maps.jsx
│  │  ├─ MyApproach.jsx
│  │  ├─ Nav.jsx
│  │  ├─ PortfolioCard.jsx
│  │  ├─ ProfessionalExperienceCard.jsx
│  │  ├─ ProfessionalSubTabs.jsx
│  │  ├─ ProfilePicture.jsx
│  │  ├─ ProjectCard.jsx
│  │  ├─ ProjectFilter.jsx
│  │  ├─ RegularBlogPost.jsx
│  │  ├─ SelfLearningSubTabs.jsx
│  │  ├─ StarryBackground.jsx
│  │  └─ TechnicalSkillsCard.jsx
│  ├─ data
│  │  ├─ courses.json
│  │  ├─ professional.json
│  │  └─ selflearning.json
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ About.jsx
│  │  ├─ Blog.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Home.jsx
│  │  ├─ Learned.jsx
│  │  └─ Projects.jsx
│  └─ styles.css
├─ tailwind.config.js
└─ vite.config.js

```