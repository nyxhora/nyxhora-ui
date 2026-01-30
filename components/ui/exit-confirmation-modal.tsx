"use client";

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertTriangle } from "lucide-react";

interface ExitConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  destinationUrl?: string;
  message?: string;
}

export const ExitConfirmationModal: React.FC<ExitConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  destinationUrl,
  message = "Are you sure you want to leave this page?"
}) => {
  const [countdown, setCountdown] = useState(10);
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCountdown(10);
      setCanProceed(false);
      
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanProceed(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const getDomainFromUrl = (url: string): string => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Leaving Nyxhora
          </DialogTitle>
          <DialogDescription className="space-y-2">
            <p>{message}</p>
            {destinationUrl && (
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  Going to: <strong>{getDomainFromUrl(destinationUrl)}</strong>
                </span>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              Any unsaved changes will be lost.
            </p>
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Stay on Nyxhora
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={!canProceed}
            className="flex-1"
          >
            {canProceed ? (
              "Leave Page"
            ) : (
              `Wait ${countdown}s`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
