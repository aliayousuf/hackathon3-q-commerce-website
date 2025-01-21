import { NextRequest } from "next/server";
import ShipEngine from "shipengine";
import { Address,Package } from "./type";

export async function POST(req: NextRequest) {
  const {
    shipeToAddress,
    parcels,
  }: { shipeToAddress: Address; parcels: Package[] } = await req.json();
  const shipengine = new ShipEngine({
    apiKey: process.env.SHIPENGINE_API_KEY as string,
  });

  try {
    
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipeToAddress,
        shipFrom: {
          name: "Recipient Name", // Replace with the recipient's name
          phone: "+92 300 1234567", // Replace with the recipient's phone number
          addressLine1: "Aiwan-e-Sadar", // Shortened to fit within 35 characters
          addressLine2: "Civil Lines", // Additional details moved to Address Line 2
          cityLocality: "Karachi",
          stateProvince: "Sindh",
          postalCode: "75580",
          countryCode: "PK",
          addressResidentialIndicator: "yes",
        },
        packages: parcels,
      },
      rateOptions: {
        carrierIds: ["se-1553146", "se-1553147", "se-1553148", "se-1553167"],
        // serviceCodes: ["ups_ground"],
      },
    });
    console.log(shipeToAddress, parcels, shipmentDetails);
    return new Response(JSON.stringify({ shipeToAddress, parcels , shipmentDetails}), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}