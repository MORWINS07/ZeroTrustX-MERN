const mongoose = require("mongoose");

const accessRequestSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        resourceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Resource",
            required: true
        },

        deviceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Device",
            required: true
        },

        sessionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Session",
            required: true
        },

        requestedAction: {
            type: String,
            required: true,
            trim: true
        },

        checks: {
            authentication: {
                type: String,
                enum: ["PASS", "FAIL"],
                required: true
            },

            mfa: {
                type: String,
                enum: ["PASS", "FAIL"],
                required: true
            },

            device: {
                type: String,
                enum: ["PASS", "FAIL"],
                required: true
            },

            rbac: {
                type: String,
                enum: ["PASS", "FAIL"],
                required: true
            },

            permission: {
                type: String,
                enum: ["PASS", "FAIL"],
                required: true
            },

            policy: {
                type: String,
                enum: ["PASS", "FAIL"],
                required: true
            }
        },

        decision: {
            type: String,
            enum: ["ALLOW", "DENY"],
            required: true
        },

        decisionReason: {
            type: String,
            required: true,
            trim: true
        },

        requestedAt: {
            type: Date,
            default: Date.now
        },

        evaluatedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

accessRequestSchema.index({ userId: 1, requestedAt: -1 });
accessRequestSchema.index({ resourceId: 1, requestedAt: -1 });
accessRequestSchema.index({ decision: 1, requestedAt: -1 });

module.exports = mongoose.model("AccessRequest", accessRequestSchema);