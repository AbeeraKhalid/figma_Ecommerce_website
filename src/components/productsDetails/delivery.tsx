"use client";

import { Truck, RotateCcw } from 'lucide-react';

export function DeliveryInfo() {
  return (
    <div className="space-y-3 border rounded-lg p-4">
      <div className="flex items-center gap-3">
        <Truck className="h-5 w-5 text-gray-600" />
        <div>
          <h3 className="font-medium">Free Delivery</h3>
          <p className="text-sm text-muted-foreground">Enter your postal code for Delivery Availability</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <RotateCcw className="h-5 w-5 text-gray-600" />
        <div>
          <h3 className="font-medium">Return Delivery</h3>
          <p className="text-sm text-muted-foreground">Free 30 Days Delivery Returns. Details</p>
        </div>
      </div>
    </div>
  );
}