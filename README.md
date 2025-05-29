
# 🚀 Smart Contract Crowdfunding DApp

This is a full-stack decentralized crowdfunding application built using:

- 🧠 **React + Vite** (Frontend)
- 💼 **Solidity** (Smart Contract)
- 🧪 **Hardhat** (Testing & Deployment)
- ⚡ **Ethers.js** (Blockchain Interaction)
- 🎨 **TailwindCSS** (Styling)
- 🔐 **MetaMask** (Wallet Integration)

---

## 🧰 Technologies Used

| Layer        | Tools                                    |
|--------------|------------------------------------------|
| Frontend     | React, Vite, TailwindCSS                 |
| Smart Contract | Solidity, Hardhat, Remix IDE           |
| Blockchain Interaction | Ethers.js, MetaMask            |
| Testing & Dev | Hardhat, ESLint                         |

---

## 💻 Running the Frontend Locally

To run the project locally and view the DApp interface:

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/kollins-1/Smart-contract_crowdfunding_dapp
cd Smart-contract_crowdfunding_dapp
```

### 2. 📥 Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. 🚀 Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to interact with the frontend.

> Make sure MetaMask is connected to the correct network.

---

## 🧾 How to Use the Muhendislik Smart Contract in Remix IDE

### 🔨 Features

- ✅ Create & manage crowdfunding projects
- 💰 Back projects with Ether
- 🔁 Refund mechanism on failure
- 📤 Automatic payout on goal reached
- 🔒 Admin-controlled tax and payout logic

---

### 🛠 Prerequisites

- A browser
- [MetaMask Wallet](https://metamask.io/)
- [Remix IDE](https://remix.ethereum.org/)

---

### 🪄 Steps to Use Remix IDE

#### 1. Open Remix

Go to [https://remix.ethereum.org](https://remix.ethereum.org)

#### 2. Paste the Contract

- Create a new file: `Muhendislik.sol`
- Copy and paste the smart contract code into it

#### 3. Compile the Contract

- Navigate to the **Solidity Compiler**
- Use version `0.8.7` (to match `pragma`)
- Click **Compile Muhendislik.sol**

#### 4. Deploy the Contract

- Go to **Deploy & Run Transactions**
- Set environment to `Injected Provider - MetaMask`
- In constructor, input `_projectTax` (e.g., `10`)
- Click **Deploy** and confirm in MetaMask

---

## 🧪 How to Use the Contract Functions

### 📌 Creating a Project

- Call `createProject(string title, string desc, string imageURL, uint cost, uint expiresAt)`
- Set `cost` in wei (e.g., `1000000000000000000` = 1 ETH)
- Set `expiresAt` as a UNIX timestamp in the future
- After creating, project is stored with `id = 0` (first project)

---

### 💸 Backing a Project

- Call `backProject(uint id)`
- Input project `id` (e.g., `0`)
- Set ETH value in the Remix value field (e.g., `1 ether`)
- Click transact

---

### 🔍 Viewing Project Data

- `getProjects()` → View all projects
- `getProject(id)` → Get a single project
- `getBackers(id)` → See who backed a project

---

### 🛠 Updating a Project

- Call `updateProject(id, title, desc, imageURL, expiresAt)`

---

### 🗑 Deleting a Project

- Call `deleteProject(id)` (only owner)
- All backers will be refunded

---

### ♻️ Request Refund

- Call `requestRefund(id)` if project status is `REVERTED` or `DELETED`

---

### 💼 Manual Payout

- Call `payOutProject(id)` (only owner or admin)

---

### 🛡 Admin Functions

- `changeTax(uint taxPct)` – only callable by contract owner

---

## 📊 Example Testing Flow

1. Create a project with target `1 ETH` and a future expiry
2. Back it with two users sending `0.5 ETH` each
3. Once `raised >= cost`, funds are paid out automatically
4. If goal not reached by expiry, funds are refunded

---

## 🔗 Useful Links

- 🌐 [Project Site](https://daltonic.github.io/)
- 🦊 [MetaMask](https://metamask.io/)
- ✍️ [Remix IDE](https://remix.ethereum.org/)
- ⚙️ [Hardhat Docs](https://hardhat.org/)
- ⚛️ [React](https://reactjs.org/)
- 📜 [Solidity](https://soliditylang.org/)
- 📚 [Ethers.js](https://docs.ethers.io/v5/)

---

## 📄 License

This project is under the **MIT License** — feel free to fork and build on it.

---

## ✍️ Author

- **Collins Somade**
- GitHub: [kollins-1](https://github.com/kollins-1)
