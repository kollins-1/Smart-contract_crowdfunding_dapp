import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MuhendislikModule", (m) => {
  const taxFee = m.getParameter("taxFee", 5); // Default tax fee of 5 if not provided

  // Deploy the Muhendislik contract with the specified tax fee
  const contract = m.deploy("Muhendislik", [taxFee]);

  // Return the deployed contract
  return { contract };
});
